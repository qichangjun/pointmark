import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router/app-router.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ShareModule,
    CoreModule.forRoot(),
    BrowserModule,
    AppRouterModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
