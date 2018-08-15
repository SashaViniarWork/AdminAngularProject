import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CrudUserService} from '../../core/services/crud-user.service';

@Component({
  selector: 'app-user-main-page',
  templateUrl: './user-main-page.component.html',
  styleUrls: ['./user-main-page.component.scss']
})
export class UserMainPageComponent implements OnInit {

  public userList
  constructor(private crudUserServices: CrudUserService, private router: Router) { }

  ngOnInit() {
    this.crudUserServices.getUserList().subscribe( users => {
      this.userList = users;
      console.log(this.userList);
    });
  }

  onSelect (user) {
    this.router.navigate(['crud-user/user-edit/', user._id]);
  }
}
