import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinOperatingComponent } from './fin-operating.component';
import { FinOperatingRoutingModule } from './fin-operating-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [
    CommonModule,
    FinOperatingRoutingModule,
  ],
  declarations: [
    FinOperatingComponent,
    EditComponent
  ]
})
export class FinOperatingModule { }
