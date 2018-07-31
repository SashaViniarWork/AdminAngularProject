import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditPageComponent} from './edit-page/edit-page.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full'
  },
  {
    path: 'edit-page',
    component: EditPageComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudPageRoutingModule { }
