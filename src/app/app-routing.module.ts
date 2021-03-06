import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuardService } from './core/services/auth-guard.service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'crud-user',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: 'app/auth/auth.module#AuthModule',
    // canActivate: [AuthGuardService]
  },
  {
    path: 'crud-page',
    loadChildren: 'app/crud-page/crud-page.module#CrudPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'crud-employees',
    loadChildren: 'app/crud-employees/crud-employees.module#CrudEmployeesModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'crud-user',
    loadChildren: 'app/crud-user/crud-user.module#CrudUserModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'crud-employees',
    loadChildren: 'app/crud-employees/crud-employees.module#CrudEmployeesModule',
    // canActivate: [AuthGuardService]
  },
  {
    path: 'fin-operation',
    loadChildren: 'app/fin-operating/fin-operating.module#FinOperatingModule',
    // canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
