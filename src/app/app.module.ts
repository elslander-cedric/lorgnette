import { Goodreads } from './goodreads.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationsModule } from 'angular2-notifications';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookBarCodeScannerComponent } from './book-bar-code-scanner/book-bar-code-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookBarCodeScannerComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule,
    PushNotificationsModule,
    MaterialModule,
    HttpModule
  ],
  providers: [Goodreads],
  bootstrap: [AppComponent]
})
export class AppModule { }
