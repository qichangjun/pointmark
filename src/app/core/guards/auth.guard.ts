import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

declare var Cookies:any;
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log (Cookies.getJSON('current_user_token'))
      if (Cookies.getJSON('current_user_token')) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;      
  }
}
