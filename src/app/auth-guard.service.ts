import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    CanLoad,
    Route,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {

        if(this.authService.authenticated){
            return true;
        } else {
            this.authService.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    }

    public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(childRoute, state);
    }

    public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.authenticated){
            return true;
        } else {
            this.authService.redirectUrl = route.path;
            this.router.navigate(['/login']);
            return false;
        }
    }
}
