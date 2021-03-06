import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

declare var Cookies:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginInfo : LoginInfo = {
    userName : '',
    password : ''
  }
  registerInfo : LoginInfo = {
    userName : '',
    password : ''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService:LoginService
  ) {}

  ngOnInit() {
  }

  async login(){
    let res = await this.loginService.login(this.loginInfo)
    Cookies.set('current_user_token',
      {accessKey:res.accessKey,accessToken:res.accessToken,userName:this.loginInfo.userName},
      {expires:365 })
    this.router.navigate(['/main']);
  }

  async register(){
    let res = await this.loginService.register(this.registerInfo)

  }
}

//登陆信息,用户名，密码必填
export class LoginInfo{
  userName : string;
  password : string;
}
