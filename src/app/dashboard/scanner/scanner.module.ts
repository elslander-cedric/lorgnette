import { GoodreadsService } from '@oo/goodreads.service';
import { GoodreadsMockService } from '@oo/goodreads-mock.service';
import { MaterialModule } from '@oo/material.module';
import { ScannerRoutingModule } from './scanner-routing.module';
import { RouterModule } from '@angular/router';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookDetailComponent } from './book-detail.component';
import { BarcodeFinderComponent } from './barcode-finder.component';
import { ScannerComponent } from './scanner.component';
import { isDevMode, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        ScannerComponent,
        BarcodeFinderComponent,
        BookDetailComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        //NgbModule,
        ScannerRoutingModule
    ],
    exports: [],
    providers: [        
        {
            provide: GoodreadsService,
            useClass: isDevMode ? GoodreadsMockService : GoodreadsService
        }
    ],
    bootstrap: [ScannerComponent]
})
export class ScannerModule {}