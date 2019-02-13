import { Component, OnInit } from '@angular/core';
import { CrudUserService } from '../../core/services/crud-user.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public usersInformatin;
  constructor(private crudUserService: CrudUserService) { }

  ngOnInit() {
    this.crudUserService.getUserList().subscribe( data => {
      this.usersInformatin = data;
    });
  }

}