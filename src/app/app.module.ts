import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ErrorPageComponent} from './shared/error-page/error-page.component';
import {CrudUserService} from './core/services/crud-user.service';
import {ApiService} from './core/api.service';
import {HeaderComponent} from './shared/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './core/services/auth.service';
import {AuthModule} from './auth/auth.module';
import {FooterComponent} from './shared/footer/footer.component';
import {TokenInterceptorService} from './core/services/token-interceptor.service';
import {AuthGuardService} from './core/services/auth-guard.service';
import {CrudPageService} from './core/services/crud-page.service';
import {FinCompanyService} from './core/services/fin-company.service';
import {BsDatepickerModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
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
