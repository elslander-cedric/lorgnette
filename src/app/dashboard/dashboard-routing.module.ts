import { BookDetailComponent } from '../book/book-detail/book-detail.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, RouterPreloader, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { 
        path: '',
        component: DashboardComponent,
        children: [
            {
                path:'',
                component: BookDetailComponent,
                outlet: 'book-detail'
            }
        ]        
    }    
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
