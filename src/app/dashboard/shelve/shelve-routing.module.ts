import { AuthGuard } from '@oo/auth-guard.service';
import { ShelveComponent } from './shelve.component';
import { ShelveResolver } from './shelve-resolver.service';
import { resolve } from 'url';
import { BookCardComponent } from './book-card.component';
import { BookCardListComponent } from './book-card-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ShelveComponent,
        children: [
            {
                path: '',
                component: BookCardListComponent,
                canActivate: [AuthGuard],
                resolve: { books: ShelveResolver }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ShelveResolver]
})
export class ShelveRoutingModule { }
