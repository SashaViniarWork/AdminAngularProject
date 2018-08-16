import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinOperatingComponent } from './fin-operating.component';
import { FinOperatingRoutingModule } from './fin-operating-routing.module';
import { EditComponent } from './edit/edit.component';
import { UserFinOperatingComponent } from './user-fin-operating/user-fin-operating.component';
import { CompanyFinOperatingComponent } from './company-fin-operating/company-fin-operating.component';
import {FinCompanyService} from '../core/services/fin-company.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FinOperatingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FinOperatingComponent,
    EditComponent,
    UserFinOperatingComponent,
    CompanyFinOperatingComponent
  ],
  providers: [
    FinCompanyService
  ]
})
export class FinOperatingModule { }
