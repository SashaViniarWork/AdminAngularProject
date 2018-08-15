import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinOperatingComponent } from './fin-operating.component';
import { FinOperatingRoutingModule } from './fin-operating-routing.module';
import { EditComponent } from './edit/edit.component';
import { UserFinOperatingComponent } from './user-fin-operating/user-fin-operating.component';
import { CompanyFinOperatingComponent } from './company-fin-operating/company-fin-operating.component';

@NgModule({
  imports: [
    CommonModule,
    FinOperatingRoutingModule,
  ],
  declarations: [
    FinOperatingComponent,
    EditComponent,
    UserFinOperatingComponent,
    CompanyFinOperatingComponent
  ]
})
export class FinOperatingModule { }
