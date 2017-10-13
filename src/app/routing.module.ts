import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { // default path (when empty)
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    { // path when path not recognized
        path: '**',
        redirectTo: '/boem',
        pathMatch: 'full'
    }
];

export function handleError(error: any) {
    console.error(error)
}

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                //enableTracing: true, // <-- debugging purposes only
                errorHandler: handleError,
                preloadingStrategy: SelectivePreloadingStrategy
            } as ExtraOptions
        )
    ],
    exports: [ RouterModule ],
    providers: [ SelectivePreloadingStrategy ]
})
export class RoutingModule { }