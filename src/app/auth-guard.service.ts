import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    NavigationExtras,
    Route,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {

        if (this.authService.authenticated) {
            return true;
        } else {
            this.authService.redirectUrl = state.url;
            this.authenticate();
            return false;
        }
    }

    public canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute, state);
    }

    public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.authenticated) {
            return true;
        } else {
            this.authService.redirectUrl = route.path;
            this.authenticate();
            return false;
        }
    }

    public authenticate() {
        // this.router.navigate(['/login-oauth']);

        this.authService.login().subscribe(() => {
            if (this.authService.authenticated) {
                const navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };

                // Redirect the user
                this.router.navigate([this.authService.redirectUrl], navigationExtras);
            }
        });
    }
}
