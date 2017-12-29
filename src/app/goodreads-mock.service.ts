import { Config } from './config';
import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, URLSearchParams } from '@angular/http';
import * as xml2js from 'xml2js';

import { Observable, Observer } from 'rxjs/Rx';
import { Book } from './book/book';
import { Utils } from './utils';

@Injectable()
export class GoodreadsMockService {

    constructor(
        private config: Config,
        private http: Http) {}

    public getSummary(isbn: string): Observable<Book> {
        return this.getDetails(isbn);
    }

    public getDetails(isbn: string): Observable<Book> {
        return Observable.of({
            author: 'Robin Hobb',
            title: 'Assassin\'s Quest (Farseer Trilogy, #3)',
            description: `From an extraordinary new voice in fantasy comes the stunning
                conclusion to the Farseer trilogy, as FitzChivalry confronts his destiny as
                 the catalyst who holds the fate of the kingdom of the Six Duchies...and the
                 world itself.<br /><br />King Shrewd is dead at the hands of his son Regal.
                 As is Fitz--or so his enemies and friends believe. But with the help of his
                 allies and his beast magic, he emerges from the grave, deeply scarred in body
                 and soul. The kingdom also teeters toward ruin: Regal has plundered and
                 abandoned the capital, while the rightful heir, Prince Verity, is lost to
                  his mad quest--perhaps to death. Only Verity's return--or the heir his
                  princess carries--can save the Six Duchies.<br /><br />But Fitz will not wait.
                  Driven by loss and bitter memories, he undertakes a quest: to kill Regal.
                  The journey casts him into deep waters, as he discovers wild
                currents of magic within him--currents that will either drown him or
                 make him something more than he was.`,
            isbn: '9780006480112',
            cover: 'https://images.gr-assets.com/books/1327864896s/68493.jpg',
            rating: 4.18
        } as Book);
    }

    public toRead(uid: string): Observable<Array<Book>> {
        return Observable.of([{
            author: 'Robin Hobb',
            title: 'Assassin\'s Quest (Farseer Trilogy, #3)',
            isbn: '9780006480112',
            cover: 'https://images.gr-assets.com/books/1327864896s/68493.jpg',
            rating: 4.18
        }, {
            author: 'Robin Hobb',
            title: 'Assassin\'s Quest (Farseer Trilogy, #3)',
            isbn: '9780006480112',
            cover: 'https://images.gr-assets.com/books/1327864896s/68493.jpg',
            rating: 4.18
        }, {
            author: 'Robin Hobb',
            title: 'Assassin\'s Quest (Farseer Trilogy, #3)',
            isbn: '9780006480112',
            cover: 'https://images.gr-assets.com/books/1327864896s/68493.jpg',
            rating: 4.18
        }] as Book[]);
    }
}
