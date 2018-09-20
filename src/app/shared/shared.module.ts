import {ModuleWithProviders, NgModule} from '@angular/core';
import {UsersFilterPipe} from '../core/pipes/users-filter.pipe';
import {CommonModule} from '@angular/common';
import {FinCompanyPipe} from '../core/pipes/fin-company.pipe';
import {DateFilterPipe} from '../core/pipes/date-filter.pipe';
import {AuthService} from '../core/services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


const imports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  NgbModule,
  BsDatepickerModule.forRoot(),
];

const exportPipes = [
  FinCompanyPipe,
  DateFilterPipe,
  UsersFilterPipe,
];

const exportModules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  HttpClientModule,
  NgbModule,
  BsDatepickerModule,
];

const exportComponents = [];

const exportProviders = [];
const shared = [
  ...exportModules,
  ...exportComponents,
  ...exportPipes,
];

@NgModule({
  imports: imports,
  exports: shared,
  declarations: [
    ...exportComponents,
    ...exportPipes,
  ],
  providers: [
    ...exportProviders,

  ],
  entryComponents: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
      ]
    };
  }
}

