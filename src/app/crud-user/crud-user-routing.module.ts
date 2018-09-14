import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserEditPageComponent} from './user-edit-page/user-edit-page.component';
import {UserMainPageComponent} from './user-main-page/user-main-page.component';
import {AddUserComponent} from './add-user/add-user.component';
import {UserVacationComponent} from "./user-vacation/user-vacation.component";
import {TimeOffListComponent} from "./time-off-list/time-off-list.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-main',
    pathMatch: 'full'
  },
  {
    path: 'user-edit/:id',
    component: UserEditPageComponent
  },
  {
    path: 'user-profile/:id',
    component: UserProfileComponent
  },
  {
    path: 'time-off-list',
    component: TimeOffListComponent
  },
  {
    path: 'user-add',
    component: AddUserComponent
  },
  {
    path: 'user-main',
    component: UserMainPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudUserRoutingModule {
}
