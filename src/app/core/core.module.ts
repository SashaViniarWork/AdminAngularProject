import {NgModule, Optional, SkipSelf} from '@angular/core';
import {ApiService} from './api.service';

import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule.forRoot(),
  ],
  declarations: [],
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
