import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppStoreModule } from './app-store.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { Config } from './config';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule,
    SimpleNotificationsModule,
    HttpModule,
    FlexLayoutModule,
    NgbModule.forRoot(),
    MaterialModule,
    RouterModule,
    AppStoreModule,
    DashboardModule,
    AppRoutingModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    NgbModule
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