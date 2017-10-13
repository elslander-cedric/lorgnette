import { BookRoutingModule } from './book-routing.module';
import { NgModule, Renderer, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

import { GoodreadsService } from '../goodreads.service';
import { GoodreadsMockService } from '../goodreads-mock.service';

import { BookCardComponent } from './book-card/book-card.component';
import { BookCardListComponent } from './book-card-list/book-card-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardSelectedDirective } from './book-card-selected.directive';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        BookCardComponent,
        BookCardListComponent,
        BookDetailComponent,
        BookCardSelectedDirective
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        BookRoutingModule        
    ],
    exports: [
        BookCardListComponent,
        BookDetailComponent
    ],
    providers: [
        {
            provide: GoodreadsService,
            useClass: isDevMode ? GoodreadsMockService : GoodreadsService
        }
    ],
})
export class BookModule {}