import { AuthService } from '@oo/auth.service';
import { ShelveResolver } from './shelve/shelve-resolver.service';
import { resolve } from 'path';
import { FooterToolbarComponent } from './footer-toolbar.component';
import { AuthGuard } from '@oo/auth-guard.service';
import { HeaderSearchToolbarComponent } from './header-search-toolbar.component';
import { HeaderToolbarComponent } from './header-toolbar.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CanActivate, CanLoad, LoadChildren, RouterModule, RouterPreloader, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: FooterToolbarComponent,
                outlet: "footer"
            },
            {
                path: '',
                component: HeaderToolbarComponent,
                outlet: "header"
            },
            {
                path: '',
                children: [
                    {
                        path: 'scanner',
                        loadChildren: 'app/dashboard/scanner/scanner.module#ScannerModule',
                        data: { preload: true }
                    },
                    {
                        path: 'shelve',
                        loadChildren: 'app/dashboard/shelve/shelve.module#ShelveModule',
                        canLoad: [AuthGuard]
                    },
                    {
                        path: 'profile',
                        loadChildren: 'app/dashboard/profile/profile.module#ProfileModule',
                        canActivate: [AuthGuard]
                    },
                    {
                        path: 'login',
                        loadChildren: 'app/dashboard/login/login.module#LoginModule'
                    },
                    {
                        path: '',
                        redirectTo: '/scanner',
                        pathMatch: 'full'
                    }
                ]
                
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class DashboardRoutingModule { }
