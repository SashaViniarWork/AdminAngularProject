import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from './api.service';
import { UsersFilterPipe } from './pipes/users-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsersFilterPipe],
  providers: [
    ApiService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
