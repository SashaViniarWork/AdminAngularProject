import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditComponent} from './edit/edit.component';
import {UserFinOperatingComponent} from './user-fin-operating/user-fin-operating.component';
import {CompanyFinOperatingComponent} from './company-fin-operating/company-fin-operating.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'company-operations',
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'empl-operations',
    component: UserFinOperatingComponent
  },
  {
    path: 'company-operations',
    component: CompanyFinOperatingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinOperatingRoutingModule {
}
