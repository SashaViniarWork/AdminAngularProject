import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserEditPageComponent} from './user-edit-page/user-edit-page.component';
import {UserMainPageComponent} from './user-main-page/user-main-page.component';
import {AddUserComponent} from './add-user/add-user.component';
import { AuthGuardService } from '../core/services/auth-guard.service';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'user-main-page',
    pathMatch: 'full'

  },
  {
    path: 'user-edit',
    component: UserEditPageComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'user-main-page',
    component: UserMainPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudUserRoutingModule { }
