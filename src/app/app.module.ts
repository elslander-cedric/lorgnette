import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { BookCardListComponent } from './book/book-card-list/book-card-list.component';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PushNotificationsModule } from 'angular2-notifications';
import { MaterialModule } from './material.module';
import { ReduxModule } from './redux.module';
import { BookModule } from './book/book.module';
import { RoutingModule } from './routing.module';

import { Config } from './config';
import { AppComponent } from './app.component';
import { ScannerComponent } from './scanner/scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    ScannerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule,
    PushNotificationsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    ReduxModule, 
    RouterModule,
    BookModule,
    LoginModule,
    DashboardModule,
    RoutingModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    { 
      provide: Config,
      useValue: {
        captureMode: 'image',
        goodreadsAPIKey: 'w3qN6mPoYXHf70ctel9og',
        goodreadsUID: '58081960-cedric-elslander'
      } as Config
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}