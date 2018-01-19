import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { ApiUrlService } from './services/api-url.service';
import { AuthService } from './services/auth.service';
import { ConstantService } from './services/constant.service';
import { ServiceHandleService } from './services/service-handle.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[AuthGuard,ApiUrlService,AuthService,ConstantService,ServiceHandleService]
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
