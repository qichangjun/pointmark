import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    ShareModule,
    LoginRoutingModule,
    CommonModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
