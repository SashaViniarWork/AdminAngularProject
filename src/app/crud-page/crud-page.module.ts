import {NgModule} from '@angular/core';

import {CrudPageRoutingModule} from './crud-page-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {AddNewPageComponent} from './add-new-page/add-new-page.component';
import {ViewPageComponent} from './view-page/view-page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    CrudPageRoutingModule,
  ],
  declarations: [MainPageComponent, EditPageComponent, AddNewPageComponent, ViewPageComponent]
})
export class CrudPageModule {
}
