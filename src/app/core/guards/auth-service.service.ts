import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {JwtService} from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public jwt: JwtService, public router: Router) {}
  canActivate(): boolean {
    if (!this.jwt.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
