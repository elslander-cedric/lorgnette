import { AuthGuard } from '../auth.guard';
import { BookCardListComponent } from './book-card-list/book-card-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCardComponent } from './book-card/book-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: 'book:isbn', component: BookDetailComponent },
    { path: 'books', redirectTo: '/books-to-read'},
    {
        path: 'books-to-read',
        component: BookCardListComponent, 
        canActivate:[AuthGuard],
        data: { preload: true }
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookRoutingModule {}
