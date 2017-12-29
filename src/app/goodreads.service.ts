import { Config } from './config';
import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response, URLSearchParams } from '@angular/http';
import * as xml2js from 'xml2js';

import { Observable, Observer } from 'rxjs/Rx';
import { Book } from './book/book';
import { Utils } from './utils';

@Injectable()
export class GoodreadsService {

    constructor(
        private config: Config,
        private http: Http) {}

    public getSummary(isbn: string): Observable<Book> {
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: '/goodreads/search/index.xml',
            search: `key=${this.config.goodreadsAPIKey}&q=${isbn}`
        })).switchMap((response: Response) => {
            return Observable.create((observer: Observer<Book>) => {
                const xml = response.text();

                xml2js.parseString(xml, function (err, json) {
                    if (!err) {
                        const books: Array<Book> = json.GoodreadsResponse.search[0].results[0].work.map((item) => {
                            return {
                                isbn: isbn,
                                title: item.best_book[0].title[0],
                                author: item.best_book[0].author[0].name[0],
                                rating: item.average_rating[0],
                                cover: item.best_book[0].small_image_url[0]
                            } as Book;
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

    public getDetails(isbn: string): Observable<Book> {
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: `/goodreads/book/isbn/${Utils.toISBN10(isbn)}`,
            search: `key=${this.config.goodreadsAPIKey}`
        })).switchMap((response: Response) => {
            return Observable.create((observer: Observer<Book>) => {
                const xml = response.text();

                xml2js.parseString(xml, function (err, json) {
                    if (!err) {
                        const book: Book = {
                            isbn: isbn,
                            title: json.GoodreadsResponse.book[0].title[0],
                            description: json.GoodreadsResponse.book[0].description[0],
                            author: json.GoodreadsResponse.book[0].authors[0].author[0].name[0],
                            rating: json.GoodreadsResponse.book[0].average_rating[0],
                            cover: json.GoodreadsResponse.book[0].small_image_url[0]
                        } as Book;

                        observer.next(book);
                        observer.complete();
                    } else {
                        observer.error(err);
                    }
                });
            });
        });
    }

    public toRead(uid: string): Observable<Array<Book>> {
        return this.http.request(new Request({
            method: RequestMethod.Get,
            url: `/goodreads/review/list`,
            search: `key=${this.config.goodreadsAPIKey}&id=${uid}&v=2&shelf=to-read`
        })).switchMap((response: Response) => {
            return Observable.create((observer: Observer<Array<Book>>) => {
                const xml = response.text();

                xml2js.parseString(xml, function (err, json) {
                    if (!err) {
                        const books: Array<Book> = json.GoodreadsResponse.reviews[0].review.map((item) => {
                            return {
                                isbn: item.book[0].isbn12,
                                title: item.book[0].title[0],
                                author: item.book[0].authors[0].author[0].name[0],
                                description: item.book[0].description[0],
                                rating: item.book[0].average_rating[0],
                                cover: item.book[0].image_url[0]
                            } as Book;
                        });

                        observer.next(books);
                        observer.complete();
                    } else {
                        observer.error(err);
                    }
                });
            });
        });
    }
}
