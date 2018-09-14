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

@NgModule({
  imports: [
    CommonModule,
    CrudUserRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UserMainPageComponent,
    UserEditPageComponent,
    AddUserComponent,
    UsersFilterPipe,
    TimeOffListComponent,
    UserProfileComponent
  ],
  providers: [
    CrudUserService,
    ApiService
  ]
})
export class CrudUserModule {
}
