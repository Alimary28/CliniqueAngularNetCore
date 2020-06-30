import { Injectable } from '@angular/core';
import { AuthenticateService } from './authenticate.service';
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthenticateService,
        private router: Router) { }

    canActivate(next: ActivatedRouteSnapshot) {
        const roles = next.data.roles as Array<string>;
        if (roles) {
            const match = this.authService.roleMatch(roles);
            if (match) {
                return true;
            } else {
                this.router.navigate(['/medical-service-list']);
                alert('You are not authorized to access this area');
            }
        }
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/medical-service-list']);
        return false;
    }

    canActivateChild() {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.router.navigate(['/medical-service-list']);
        return false;
    }
}
