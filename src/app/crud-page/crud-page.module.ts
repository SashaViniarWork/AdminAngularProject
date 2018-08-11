import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudPageRoutingModule } from './crud-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddNewPageComponent } from './add-new-page/add-new-page.component';
import { ViewPageComponent } from './view-page/view-page.component';

@NgModule({
  imports: [
    CommonModule,
    CrudPageRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  declarations: [MainPageComponent, EditPageComponent, AddNewPageComponent, ViewPageComponent]
})
export class CrudPageModule { }
