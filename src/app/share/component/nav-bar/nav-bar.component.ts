import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantService } from '../../../core/services/constant.service';
import { AuthService } from '../../../core/services/auth.service';
import { ApiUrlService } from '../../../core/services/api-url.service';
import { LoginInfo } from '../../../login/login/login.component';
import { LoginService } from '../../../login/login/login.service';
declare var jQuery:any;
declare var $ : any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers:[LoginService]
})
export class NavBarComponent implements OnInit {
  loginInfo : LoginInfo = {
    userName : '',
    password : ''
  }
  constructor(
    public _constantService : ConstantService,
    public _AuthService : AuthService,
    public _apiUrlService : ApiUrlService,
    public _LoginService : LoginService
  ) {

   }

  ngOnInit() {
    this.loginInfo.userName = this._AuthService.getCurrentUser().userName
  }

  async resetPassword(){    
    await this._LoginService.resetPassword(this.loginInfo)
    $('#resetPassword').modal('hide')
  }
}
