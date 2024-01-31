import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Observable, of, EMPTY, Subscription} from 'rxjs';
import {AuthService} from "../services/auth.service";
//import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSvc: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    if (this.authSvc.tokenExists()) {
      return true;
    }else {
      this.authSvc.logout();
      return false;
    }
  }
}
