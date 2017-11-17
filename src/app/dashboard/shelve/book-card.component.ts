import { Book } from '@oo/book/book';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lorgnette-book-card',
  template: `
    <mat-card>
      <mat-card-header fxLayout="row">
          <img mat-card-avatar src="{{ book?.cover }}">
          <div fxLayout="column">
                  <mat-card-title>{{ book.title }}</mat-card-title>
                  <mat-card-subtitle>{{ book.author }}</mat-card-subtitle>
                  <ngb-rating [readonly]="true" max="5" [rate]="book?.rating">
                  </ngb-rating>
          </div>

      </mat-card-header>

      <mat-card-content>{{ book?.description }}</mat-card-content>
      <mat-card-footer></mat-card-footer>
      
      <mat-card-actions>        
          <button mat-raised-button color='warn' (click)="remove.emit(book)">Remove</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card {
        margin: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent implements OnInit {

  @Input() public book : Book;
  @Output('add') add = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();
  
  constructor() { }

  ngOnInit() {}
  
}
