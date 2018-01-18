import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var Cookies:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginInfo : LoginInfo = {
    userName : '',
    password : ''
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login(){
    Cookies.set('current_user_token', 
      {accessToken:'user.accessToken',accessUser:'user.accessUser'},
      {expires:365 })    
    this.router.navigate(['/main']);
  }
}

//登陆信息,用户名，密码必填
class LoginInfo{
  userName : string;
  password : string;
}