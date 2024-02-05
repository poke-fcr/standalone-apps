import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      window.sessionStorage.getItem('userToken') &&
      window.sessionStorage.getItem('userToken') === 'fcr'
    ) {
      return true;
    } else {
      let input = prompt('Who let the dogs out?');
      if (input === 'fcr') {
        window.sessionStorage.setItem('userToken', 'fcr');
        return true;
      }
      return false;
    }
  }
}
