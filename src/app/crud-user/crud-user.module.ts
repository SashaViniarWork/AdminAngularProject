import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudUserRoutingModule } from './crud-user-routing.module';
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
import { UserEditPageComponent } from './user-edit-page/user-edit-page.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    CrudUserRoutingModule
  ],
  declarations: [UserMainPageComponent, UserEditPageComponent, AddUserComponent]
})
export class CrudUserModule { }
