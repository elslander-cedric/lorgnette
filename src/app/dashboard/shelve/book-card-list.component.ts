import { BookStoreAction } from '@oo/book/book-store-action';
import { BookStore } from '@oo/book/book-store';
import { Book } from '@oo/book/book';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'oo-book-card-list',
  template: `
    <div [ngClass]="'book-list'" *ngIf="books | async as books"
      fxLayout="column" fxFlex="1 1 auto">
      <oo-book-card
        *ngFor="let book of books"
        [book]="book"
        (remove)="removeBook($event)"
        [ooBookCardSelected]="(selectedBook | async) === book.isbn">
      </oo-book-card>
    </div>
  `,
  styles: [`
    .book-list {
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }

    .book-list::-webkit-scrollbar {
        display: none;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
  /*
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.2s ease-out', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ])
  ]) as AnimationTriggerMetadata ]
  */
})
export class BookCardListComponent implements OnInit {

  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  // @Input() books: Array<Book>;
  books: Observable<Array<Book>>;

  public selectedBook: Observable<string>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private store: Store<BookStore>,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedBook = this.route.paramMap.map((paramMap: ParamMap) =>
      paramMap.get('isbn'));

    this.books = this.route.data.map(data => data.books);
  }

  private removeBook(book: Book): void {
    this.store.dispatch(
      new BookStoreAction(BookStoreAction.REMOVE_BOOK, book));

    this.changeDetector.markForCheck();
  }
}
