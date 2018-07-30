import { Component, OnInit } from '@angular/core';
import { CrudUserService } from '../../core/services/crud-user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private crudUserService: CrudUserService) { }

  ngOnInit() {
  }

}
