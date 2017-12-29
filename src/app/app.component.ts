import { DomSanitizer } from '@angular/platform-browser';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';

import { Config } from './config';
import { Book } from './book/book';
import { BookStore } from './book/book-store';
import { MatIconRegistry } from '@angular/material';
import { NotificationService } from '@oo/notification.service';

@Component({
  selector: 'oo-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    body {
        font-family: Roboto, Arial, sans-serif;
        margin: 0;
    }

    html, body {
        height: 100%;
        width: 100%
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {

  public books: Observable<Array<Book>>;
  public book: Observable<Book>;

  constructor(
    private config: Config,
    private store: Store<BookStore>,
    private matIconRegistry: MatIconRegistry,
    // private notificationService: NotificationService,
    private domSanitizer: DomSanitizer
  ) {
    this.books = this.store.select('books');
    this.matIconRegistry.addSvgIcon('lorgnette',
      domSanitizer.bypassSecurityTrustResourceUrl('/assets/lorgnette_24x24.svg'));
  }

  public ngAfterViewInit(): void { }

  public ngOnInit(): void {
    this.init();
  }

  public init(): void {

    /*
    this.book = this.scanner.barcode.switchMap((barcode : string) : Observable<Book> => {
      return this.lookupISBN(barcode);
    });
    */

    // this.books = this.goodreads.toRead(this.config.goodreadsUID);

    // this.notificationService.register();
  }

  /*
  private lookupISBN(isbn : string) : Observable<Book> {
     return this.goodreads.getDetails(isbn);
  }
  */

  private addBook(book: Book): void {
    // this.store.dispatch
    //   (new BookAction(BookAction.ADD_BOOK, book));
  }
}
