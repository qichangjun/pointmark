import { Injectable } from '@angular/core';
declare var Cookies:any;
@Injectable()
export class AuthService {

  constructor() { }
  getCurrentUser() {    
    return Cookies.getJSON('current_user_token') || {}
  }
}
