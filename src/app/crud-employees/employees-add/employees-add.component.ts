import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrudUserService} from '../../core/services/crud-user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.scss']
})
export class EmployeesAddComponent implements OnInit {
  public addForm: FormGroup;
  public positions = [
    {
    id: '8f8c6e98',
    name: 'Front-end Developer'
    },
    {
      id: '169fee1a',
      name: 'QA Tester',
    },
    {
      id: '3953154c',
      name: 'Back-end Developer',
    }
  ];
  public projects = [
    {
      id: '8f8c6e98',
      name: 'Project 1'
    },
    {
      id: '169fee1a',
      name: 'Project 2',
    },
    {
      id: '3953154c',
      name: 'Project 3',
    }
  ];
  constructor(private crudUserService: CrudUserService,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.addForm = formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      birthday: [null, Validators.required],
      position: [this.positions[0], Validators.required],
      projects: [this.projects[0], Validators.required],
      salary: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }
  add() {}
}
