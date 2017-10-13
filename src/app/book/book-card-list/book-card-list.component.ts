import { ActivatedRoute, ParamMap } from '@angular/router';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { Book } from '../book';
import { BookStore } from '../book-store';
import { BookAction } from '../book-action';
import { GoodreadsService } from '../../goodreads.service';
import { Config } from '../../config';

@Component({
  selector: 'lorgnette-book-card-list',
  templateUrl: './book-card-list.component.html',
  styleUrls: ['./book-card-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
})
export class BookCardListComponent implements OnInit {
 
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  
  //@Input() books: Array<Book>;
  books: Observable<Array<Book>>;

  public selectedBook: Observable<string>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private store: Store<BookStore>,
    private route: ActivatedRoute,
    private goodreads: GoodreadsService,
    private config: Config) {
      this.books = this.goodreads.toRead(this.config.goodreadsUID);
    }

  ngOnInit() {
    this.selectedBook = this.route.paramMap.map((paramMap: ParamMap) => 
      paramMap.get('isbn'));    
  }

  private removeBook(book : Book) : void {    
    this.store.dispatch(
      new BookAction(BookAction.REMOVE_BOOK, book));
      
    this.changeDetector.markForCheck();
  }
}
