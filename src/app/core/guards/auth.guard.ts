import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivate, CanActivateChild {
//   constructor(private authService: AuthService, private router: Router) {}

//   private checkAuth(): boolean {
//     if (this.authService.isAuthenticated()) {
//       return true;
//     } else {

//       // redirect to login if not authenticated
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }

//   canActivate(): boolean {
//     return this.checkAuth();
//   }

//   canActivateChild(): boolean {
//     return this.checkAuth();
//   }
// }


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuth(): boolean {

    // ==== DEV BYPASS ====
    // if (!environment.production && environment.localDevBypassAuth) {
    if (environment.localDevBypassAuth) {
      console.warn('DEV mode: bypassing authentication');
      return true;
    }

    // ==== NORMAL BEHAVIOR ====
    if (this.authService.isAuthenticated()) {
      return true;
    }

    // Redirect to NetIQ login
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(): boolean {
    return this.checkAuth();
  }

  canActivateChild(): boolean {
    return this.checkAuth();
  }
}

