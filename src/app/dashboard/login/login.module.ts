import { MaterialModule } from '@oo/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [],
})
export class LoginModule {}
