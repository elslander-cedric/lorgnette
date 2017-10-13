import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { Utils } from './utils';
import { Book } from './book/book';
import { BookAction } from './book/book-action';

export function booksReducer(state: Array<Book> = [], action: BookAction) {
    console.log(`handle book action: ${action.type}, state: ${JSON.stringify(state)}`);
    switch (action.type) {
        case BookAction.ADD_BOOK:
            return [...state, Utils.deepCopy(action.payload)];
        case BookAction.REMOVE_BOOK:
            return state.filter((book: Book) => book.isbn !== action.payload.isbn);
        default:
            return state;
    }
};

@NgModule({
    imports: [
        StoreModule.forRoot({ books: booksReducer })
    ],
    exports: [
        StoreModule
    ]
})
export class ReduxModule { }