
import {AppRoutingModule} from './app-routing.module';


import {AppComponent} from './app.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {CrudUserService} from './core/services/crud-user.service';
import {ApiService} from './core/api.service';
import {HeaderComponent} from './shared/header/header.component';

import {AuthService} from './core/services/auth.service';
import {AuthModule} from './auth/auth.module';
import {FooterComponent} from './shared/footer/footer.component';
import {TokenInterceptorService} from './core/services/token-interceptor.service';
import {AuthGuardService} from './core/services/auth-guard.service';
import {CrudPageService} from './core/services/crud-page.service';
import {FinCompanyService} from './core/services/fin-company.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {SharedModule} from "./shared/shared.module";




@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],

  providers: [
    FinCompanyService,
    CrudUserService,
    ApiService,
    AuthService,
    AuthGuardService,
    CrudPageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
