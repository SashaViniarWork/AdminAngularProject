
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CrudPageModule } from './crud-page/crud-page.module';
import { CrudUserModule } from './crud-user/crud-user.module';
import {FinOperatingModule} from './fin-operating/fin-operating.module';


const routes: Routes = [

  {
    path: 'author',
    loadChildren: 'app/auth/auth.module#AuthModule'
  },
  {
    path: 'crud-page',
    loadChildren: 'app/crud-page/crud-page.module#CrudPageModule'
  },
  {
    path: 'crud-user',
    loadChildren: 'app/crud-user/crud-user.module#CrudUserModule'
  },
  {
    path: 'fin-operation',
    loadChildren: 'app/fin-operating/fin-operating#FinOperatingModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
