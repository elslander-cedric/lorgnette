import { GoodreadsService } from '@oo/goodreads.service';
import { element } from 'protractor/built';
import { Book } from '@oo/book/book';
import { ElementFinder } from 'protractor/built/element';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import {
    AfterViewInit,
    Component,
    ElementRef,
    HostBinding,
    Input,
    OnInit,
    Query,
    QueryList,
    Renderer2,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'lorgnette-book-detail',
  template: `
    <div fxLayout="column">
      <div [ngClass]="'heading'" fxLayout="row">
          <img [src]="book?.cover"/>
          <div [ngClass]="'outline'" fxLayout="column">
              <div [ngClass]="'title'">{{ book.title}}</div>
              <div [ngClass]="'author'">{{ book.author }}</div>            
              <!-- <ngb-rating [readonly]="true" max="5" [rate]="book?.rating"></ngb-rating> -->
          </div>
      </div>
      
      <div #description [ngClass]="['description', expanded ? 'expanded' : 'collapsed']" [innerHTML]="book.description"></div>    
      <a #readmore [ngClass]="['readmore']" role="button" tabindex="0" [hidden]="expanded" (click)="expanded = true">Read More</a>
    </div>  
  `,
  styles: [`
    .heading {    
        flex: 1 0 auto;
    }

    .description {    
        margin-top: 5%;
        flex: 1 1 auto;
        -webkit-overflow-scrolling: touch;
    }

    .description::-webkit-scrollbar {
        display: none;
    }

    .description.collapsed {
        overflow: hidden;
    }

    .description.expanded {
        overflow: scroll;
    }
      
    ngb-rating:focus {
        outline: none;
    }

    .title {
        font-family: Arial, Helvetica, sans-serif;
        font-size: smaller;
        font-weight: bold;
        color: #5577AA;
    }

    .author {
        font-size: small;
        font-style: italic;
        color: #888888;
    }

    .outline * {
        padding-left: 5%;
    }

    .readmore.hidden {
        visibility: hidden;
    }
  `]
  /*
  animations: [trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.2s ease-out', style({
        opacity: 0,
        transform: 'translateX(100%)'
      }))
    ])
  ]) as AnimationTriggerMetadata]
  */
})
export class BookDetailComponent implements OnInit, AfterViewInit {

  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  expanded : boolean;
  
  @ViewChild('readmore') _readmore: ElementRef;
  private readmore: HTMLAnchorElement;

  @ViewChild('description') _description: ElementRef;
  private description: HTMLDivElement;

  @Input() book: Book;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _goodreads: GoodreadsService,
    private element: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    //this.book = this._route.paramMap.switchMap((params: ParamMap) => 
    //  this._goodreads.getDetails(params.get('isbn')));

    //this.book = this._route.queryParamMap.switchMap((queryParamMap: ParamMap) =>
    //  this._goodreads.getDetails(queryParamMap.get('isbn')));
  }

  public ngAfterViewInit(): void {

    
    this.description = this._description.nativeElement;
    this.readmore = this._readmore.nativeElement;

    if (this.description.scrollHeight > this.description.clientHeight) {
      console.log("need read more");
      this.renderer.removeClass(this.readmore, 'hidden');
    } else {
      console.log("don't need read more");
      this.renderer.addClass(this.readmore, 'hidden');
    }
  }
}
