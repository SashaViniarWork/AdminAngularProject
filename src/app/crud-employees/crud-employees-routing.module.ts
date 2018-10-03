import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesAddComponent} from './employees-add/employees-add.component';
import {CrudEmployeesComponent} from './crud-employees.component';

const routes: Routes = [
  {path: '', component: CrudEmployeesComponent},
  {path: 'add', component: EmployeesAddComponent},
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudEmployeesRoutingModule { }
