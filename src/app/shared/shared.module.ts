import {NgModule} from '@angular/core';
import {UsersFilterPipe} from "../core/pipes/users-filter.pipe";
import {CommonModule} from "@angular/common";
import {FinCompanyPipe} from "../core/pipes/fin-company.pipe";
import {DateFilterPipe} from "../core/pipes/date-filter.pipe";

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FinCompanyPipe,
    DateFilterPipe,
    UsersFilterPipe,
  ],
  declarations: [FinCompanyPipe, DateFilterPipe, UsersFilterPipe]
})
export class SharedModule {
}
