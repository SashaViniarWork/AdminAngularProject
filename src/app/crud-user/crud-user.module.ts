import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CrudUserRoutingModule} from './crud-user-routing.module';
import {UserMainPageComponent} from './user-main-page/user-main-page.component';
import {UserEditPageComponent} from './user-edit-page/user-edit-page.component';
import {AddUserComponent} from './add-user/add-user.component';
import {CrudUserService} from '../core/services/crud-user.service';
import {ApiService} from '../core/api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UsersFilterPipe} from '../core/pipes/users-filter.pipe';
import {TimeOffListComponent} from './time-off-list/time-off-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserTimeOffComponent} from './user-time-off/user-time-off.component';
import {UserNavComponent} from './user-nav/user-nav.component';
import {BsDatepickerModule} from "ngx-bootstrap";
import {CrudUserComponent} from "./add-user.component";

@NgModule({
  imports: [
    CommonModule,
    CrudUserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [
    CrudUserComponent,
    UserMainPageComponent,
    UserEditPageComponent,
    AddUserComponent,
    UsersFilterPipe,
    TimeOffListComponent,
    UserProfileComponent,
    UserTimeOffComponent,
    UserNavComponent
  ],
  providers: [
    CrudUserService,
    ApiService
  ]
})
export class CrudUserModule {
}
