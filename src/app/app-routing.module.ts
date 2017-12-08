import { LoginOauthComponent } from './login-oauth/login-oauth.component';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const routes: Routes = [

    {
        path: 'login-oauth',
        component: LoginOauthComponent
    }
    /*
    { // default path (when empty)
        path: '',
        component: DashboardComponent
    },
    { // path when path not recognized
        path: '**',
        redirectTo: '/scanner',
        pathMatch: 'full'
    }   
    */
];

export function handleError(error: any) {
    console.error(error)
}

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: true, // <-- debugging purposes only
                errorHandler: handleError,
                preloadingStrategy: SelectivePreloadingStrategy
            } as ExtraOptions
        )
    ],
    exports: [ RouterModule ],
    providers: [
        SelectivePreloadingStrategy, 
        { 
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ]
})
export class AppRoutingModule { }