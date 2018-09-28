import { Component, OnInit } from '@angular/core';
import {CrudUserService} from '../../core/services/crud-user.service';

@Component({
  selector: 'app-user-fin-operating',
  templateUrl: './user-fin-operating.component.html',
  styleUrls: ['./user-fin-operating.component.scss']
})
export class UserFinOperatingComponent implements OnInit {
  public currentUser: string = '';
  public usersInformatin;
  constructor(public crudUserService: CrudUserService) { }

  ngOnInit() {
    this.crudUserService.getUserList().subscribe( data => {
      this.usersInformatin = data;
      console.log(this.usersInformatin);
    });
  }
  editUser(user) {
    this.currentUser = user.surname;
  }
  saveChanges(user) {
    const req = {
      id: user._id,
      name: user.name,
    };
    this.crudUserService.updaterUser(req).subscribe( res => this.currentUser = '');
  }

}
