import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CrudUserService} from '../../core/services/crud-user.service';
import { UsersFilterPipe } from '../../core/pipes/users-filter.pipe';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.scss']
})
export class UserMainPageComponent implements OnInit {

  public userList;
  public term;

  constructor(private crudUserServices: CrudUserService, public router: Router) { }

  ngOnInit() {
    this.userListOutput();
  }

  onSelect(user) {
    this.router.navigate(['crud-user/user-edit/', user._id]);
  }

  removeUser(user) {
    const ale = confirm('Are you shoore ?')
    if ( ale ) {
      const req = {
        id: user._id,
        isActive: false
      }
      this.crudUserServices.disactiveUser(req).subscribe(res => {
        this.userListOutput();
      });
    }
  }

  userListOutput() {
    this.crudUserServices.getUserList().subscribe( users => {
      this.userList = users;
    });
  }
}
