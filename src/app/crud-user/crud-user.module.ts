import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CrudUserRoutingModule } from './crud-user-routing.module';
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import {CrudUserService} from '../core/services/crud-user.service';

@NgModule({
  imports: [
    CommonModule,
    CrudUserRoutingModule,
    HttpClientModule
  ],
  declarations: [
    UserMainPageComponent,
    UserEditPageComponent,
    AddUserComponent
  ],
  providers: [
    CrudUserService
  ]
})
export class CrudUserModule { }
