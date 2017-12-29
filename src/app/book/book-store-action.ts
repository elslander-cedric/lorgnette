import { Action } from '@ngrx/store';

import { Book } from './book';

interface PayloadAction<T> extends Action {
    payload: T;
}

export class BookStoreAction implements PayloadAction<Book> {
    public static ADD_BOOK = 'ADD_BOOK';
    public static REMOVE_BOOK = 'REMOVE_BOOK';

    readonly type: string;
    readonly payload: Book;

    constructor(type: string, book: Book) {
        this.type = type;
        this.payload = book;
    }
}
