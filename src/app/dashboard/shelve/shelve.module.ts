import { environment } from '../../../environments/environment';
import { ShelveResolver } from './shelve-resolver.service';
import { GoodreadsMockService } from '@oo/goodreads-mock.service';
import { GoodreadsService } from '@oo/goodreads.service';
import { MaterialModule } from '@oo/material.module';

import { ShelveComponent } from './shelve.component';
import { BookCardSelectedDirective } from './book-card-selected.directive';
import { ShelveRoutingModule } from './shelve-routing.module';
import { NgModule, Renderer } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BookCardComponent } from './book-card.component';
import { BookCardListComponent } from './book-card-list.component';

import { FlexLayoutModule } from '@angular/flex-layout';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        BookCardComponent,
        BookCardListComponent,
        BookCardSelectedDirective,
        ShelveComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        //NgbModule,
        ShelveRoutingModule        
    ],
    exports: [],
    providers: [
        {            
            provide: GoodreadsService,
            useClass: environment.production ? GoodreadsMockService : GoodreadsService
        }
    ],
})
export class ShelveModule {}