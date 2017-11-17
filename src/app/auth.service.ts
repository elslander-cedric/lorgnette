import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    private _authenticated: boolean = false;
    public redirectUrl: string;

    constructor() { }

    public get authenticated() {
        return this._authenticated;
    }
    
    public login(): Observable<boolean> {
        return Observable.of(true).do(authResult => this._authenticated = authResult);
    }

    logout(): void {
        this._authenticated = false;
    }
}