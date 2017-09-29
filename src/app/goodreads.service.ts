import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestMethod } from '@angular/http';
import * as xml2js from 'xml2js';

import { Observable, Observer } from 'rxjs/Rx';
import { Book } from './book';

@Injectable()
export class Goodreads {

    constructor(private http: Http){};

    public search(term: string): Observable<Book> {
        return this.query(term)
            .switchMap((response: Response) => {
                return Observable.create((observer : Observer<Book>) => {
                    let xml = response.text();

                    xml2js.parseString(xml, function (err, json) {
                        if (!err) {                        
                            let books: Array<Book> = json.GoodreadsResponse.search[0].results[0].work.map((item) => {
                                return {
                                    title: item.best_book[0].title[0],
                                    author: item.best_book[0].author[0].name[0],
                                    rating: item.average_rating[0],
                                    cover: item.best_book[0].image_url[0]
                                } as Book
                            });

                            observer.next(books[0]);
                            observer.complete();
                        } else {
                            observer.error(err);
                        }
                    });
                });
            });
    }

    private query(isbn : string): Observable<Response> {
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: "/goodreads/search/index.xml",
            search: `key=w3qN6mPoYXHf70ctel9og&q=${isbn}`
        }));
    }
}
