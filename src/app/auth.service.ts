import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private _authenticated = true;
    public redirectUrl: string;

    constructor(
        private http: Http,
        private router: Router) { }

    public get authenticated() {
        return this._authenticated;
    }

    public login(): Observable<boolean> {

        this._authenticated = true;

        if (!this._authenticated) {

            this.router.navigate(['/login-oauth']);

            // window.location.href = 'http://localhost:1445/oauth';

            /*
            this.http
                .get('/oauth')
                .toPromise()
                .then((response) => this.router.navigate([response]))
                .map(response => {
                    console.log(response);
                    //this.router.navigate(
                    window.document.write(response);
                    return true;
                    //return response.json().authenticated;
                });
            */

            return Observable.of(true).do(authResult => this._authenticated = authResult);
        } else {
            return Observable.of(true);
        }
    }

    logout(): void {
        this._authenticated = false;
    }
}
