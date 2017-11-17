import { GoodreadsService } from '@oo/goodreads.service';
import { Book } from '@oo/book/book';
import { BarcodeFinderComponent } from './barcode-finder.component';
import { Observable, Subject } from 'rxjs/Rx';
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'lorgnette-scanner',
  template: `
    <div [ngClass]="'content'" fxLayout="column">
      <lorgnette-barcode #barcode></lorgnette-barcode>
      <div fxLayout="column" *ngIf="book | async as book">
          <lorgnette-book-detail [book]="book"></lorgnette-book-detail>
          <button mat-raised-button color="primary" fxFlex="0 0 auto"
              [routerLink]="['/shelve/add', { isbn: book.isbn }]"
              [queryParams]="{ boem: 'kaboem' }" [fragment]="'fraggy'">
              Put on my Shelve
          </button>
      </div>
    </div>
  `,
  styles: [`
    .content {
        display: flex;
        flex: 1 1 auto;
        padding: 5%;
    }

    lorgnette-book-detail {
        margin-top: 5%;
        margin-bottom: 5%;    
        display: flex;
        flex: 1 1 auto;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScannerComponent implements OnInit {

  public book: Observable<Book>;

  @ViewChild(BarcodeFinderComponent)
  public barcodeFinder: BarcodeFinderComponent;

  constructor(private goodreads: GoodreadsService) { }

  public ngOnInit(): void {    
    this.book = this.barcodeFinder.barcode
      .switchMap((barcode: string) => this.goodreads.getDetails(barcode));
  }
}