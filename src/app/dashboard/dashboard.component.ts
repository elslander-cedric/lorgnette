import { utils } from 'protractor/built';
import { ScannerComponent } from '../scanner/scanner.component';
import { Book } from '../book/book';
import { Observable } from 'rxjs/Rx';
import { GoodreadsService } from '../goodreads.service';
import { ActivatedRoute, NavigationExtras, ParamMap, Params, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lorgnette-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public title: string = 'Lorgnette';

  @ViewChild(ScannerComponent)
  public scanner : ScannerComponent;
  
  public book: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private goodreads: GoodreadsService) { }

  ngOnInit() {    
    this.book = this.scanner.barcode.switchMap((barcode: string) =>
      this.goodreads.getDetails(barcode));
  }

  private booksToRead(book: Book) : void {
    this.router.navigate(['/books-to-read/', { isbn: book.isbn }]);
  }
}