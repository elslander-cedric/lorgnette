import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from '@oo/auth-guard.service';
import { MaterialModule } from '@oo/material.module';
import { FooterToolbarComponent } from './footer-toolbar.component';
import { HeaderSearchToolbarComponent } from './header-search-toolbar.component';
import { HeaderToolbarComponent } from './header-toolbar.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
        DashboardComponent,
        HeaderSearchToolbarComponent,
        HeaderToolbarComponent,        
        FooterToolbarComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        DashboardRoutingModule
    ],
    exports: [],
    providers: [],
})
export class DashboardModule {}