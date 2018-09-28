import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudEmployeesRoutingModule } from './crud-employees-routing.module';

import { EmployeesAddComponent } from './employees-add/employees-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CrudEmployeesComponent} from './crud-employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  imports: [
    CommonModule,
    CrudEmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmployeesAddComponent,
    CrudEmployeesComponent,
    EmployeesListComponent
  ]
})
export class CrudEmployeesModule { }
