import { Component, OnInit } from '@angular/core';
import {CrudUserService} from '../../core/services/crud-user.service';

@Component({
  selector: 'app-user-fin-operating',
  templateUrl: './user-fin-operating.component.html',
  styleUrls: ['./user-fin-operating.component.scss']
})
export class UserFinOperatingComponent implements OnInit {

  public usersInformatin;

  constructor(public crudUserService: CrudUserService) { }

  ngOnInit() {
    this.crudUserService.getUserList().subscribe( data => {
      this.usersInformatin = data;
      console.log(this.usersInformatin);
    });
  }

}
