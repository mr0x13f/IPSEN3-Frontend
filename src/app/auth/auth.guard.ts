import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.authenticated) {
        return true;
      }
      this.router.navigate(['/auth']);
      return false;
    }
}

