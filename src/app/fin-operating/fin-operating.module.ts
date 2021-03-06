import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinOperatingComponent } from './fin-operating.component';
import { FinOperatingRoutingModule } from './fin-operating-routing.module';
import { EditComponent } from './edit/edit.component';
import { UserFinOperatingComponent } from './user-fin-operating/user-fin-operating.component';
import { CompanyFinOperatingComponent } from './company-fin-operating/company-fin-operating.component';
import {FinCompanyService} from '../core/services/fin-company.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FinCompanyPipe} from '../core/pipes/fin-company.pipe';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {DateFilterPipe} from '../core/pipes/date-filter.pipe';
import { FinNavigateComponent } from './fin-navigate/fin-navigate.component';
@NgModule({
  imports: [
    CommonModule,
    FinOperatingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    FinOperatingComponent,
    EditComponent,
    UserFinOperatingComponent,
    CompanyFinOperatingComponent,
    FinCompanyPipe,
    DateFilterPipe,
    FinNavigateComponent
  ],
  providers: [
    FinCompanyService
  ]
})
export class FinOperatingModule { }
