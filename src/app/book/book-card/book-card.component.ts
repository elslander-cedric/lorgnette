import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '../book';

@Component({
  selector: 'lorgnette-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent implements OnInit {

  @Input() public book : Book;
  @Output('add') add = new EventEmitter<Book>();
  @Output() remove = new EventEmitter<Book>();
  
  constructor() { }

  ngOnInit() {}
  
}
