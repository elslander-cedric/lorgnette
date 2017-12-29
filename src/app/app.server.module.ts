import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { DashboardModule } from '@oo/dashboard/dashboard.module';

const routes: Routes = [ { path: 'shell', component: ShellComponent }];

@NgModule({
  imports: [
    AppModule,
    DashboardModule,
    ServerModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
  declarations: [ShellComponent]
})
export class AppServerModule {}
