import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
