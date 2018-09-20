import {NgModule} from '@angular/core';


import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    AuthRoutingModule,

  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule {
}
