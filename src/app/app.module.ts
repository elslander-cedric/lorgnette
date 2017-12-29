import { LibraryComponent } from './library/library.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookFilterPipe } from './book-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppStoreModule } from './app-store.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Config } from './config';
import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material.module';
import { environment } from '../environments/environment';
import { NotificationService } from '@oo/notification.service';
import { LoginOauthComponent } from '@oo/login-oauth/login-oauth.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFilterPipe,
    BookSearchComponent,
    LibraryComponent,
    LoginOauthComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    HttpModule,
    FlexLayoutModule,
    // NgbModule.forRoot(),
    MaterialModule,
    RouterModule,
    AppStoreModule,
    DashboardModule,
    AppRoutingModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule
    // NgbModule
  ],
  providers: [
    environment.production ? NotificationService : [],
    {
      provide: Config,
      useValue: {
        captureMode: 'image',
        goodreadsAPIKey: 'w3qN6mPoYXHf70ctel9og',
        goodreadsUID: '58081960-cedric-elslander'
      } as Config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
