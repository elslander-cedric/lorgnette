
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() {}

    public authenticate(): Promise<boolean> {
        // TODO-FIXME: 
        return Promise.resolve(true);
    }
}