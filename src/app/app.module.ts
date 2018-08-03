import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { CrudUserService } from './core/services/crud-user.service';
import { ApiService } from './core/api.service';
import {HeaderComponent} from './shared/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuardService} from "./core/services/auth-guard.service";
import {AuthService} from "./core/services/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CrudUserService,
    ApiService/*,
    AuthGuardService,
    AuthService*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
