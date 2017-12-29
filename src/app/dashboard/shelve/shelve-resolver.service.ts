import { GoodreadsService } from '@oo/goodreads.service';
import { Observable } from 'rxjs/Rx';
import { Book } from '@oo/book/book';
import { Config } from '@oo/config';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ShelveResolver implements Resolve<Array<Book>> {

    constructor(
        private goodreads: GoodreadsService,
        private config: Config) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Array<Book>> {
        return this.goodreads.toRead(this.config.goodreadsUID);
    }
}
