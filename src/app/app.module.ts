import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { CrudUserService } from './core/services/crud-user.service';
import { ApiService } from './core/api.service';
import {HeaderComponent} from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CrudUserService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
