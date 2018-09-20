import {NgModule} from '@angular/core';


import {CrudUserRoutingModule} from './crud-user-routing.module';
import {UserMainPageComponent} from './user-main-page/user-main-page.component';
import {UserEditPageComponent} from './user-edit-page/user-edit-page.component';
import {AddUserComponent} from './add-user/add-user.component';
import {CrudUserService} from '../core/services/crud-user.service';
import {ApiService} from '../core/api.service';
import {TimeOffListComponent} from './time-off-list/time-off-list.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserTimeOffComponent} from './user-time-off/user-time-off.component';
import {UserNavComponent} from './user-nav/user-nav.component';
import {CrudUserComponent} from './add-user.component';
import {SharedModule} from '../shared/shared.module';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";

@NgModule({
  imports: [
    SharedModule.forRoot(),
    CrudUserRoutingModule,

  ],
  declarations: [
    CrudUserComponent,
    UserMainPageComponent,
    UserEditPageComponent,
    AddUserComponent,
    TimeOffListComponent,
    UserProfileComponent,
    UserTimeOffComponent,
    UserNavComponent,
  ],
  providers: [
    CrudUserService,
    ApiService
  ]
})
export class CrudUserModule {
}
