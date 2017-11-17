import { AuthService } from '@oo/auth.service';
import { AuthGuard } from '@oo/auth-guard.service';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
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
export class LoginRoutingModule {}
