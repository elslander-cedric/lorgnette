import { Observable } from 'rxjs/Rx';
import { Book } from '../book';
import { GoodreadsService } from '../../goodreads.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'lorgnette-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  animations: [ trigger('routeAnimation', [
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
  ]) as AnimationTriggerMetadata ]
})
export class BookDetailComponent implements OnInit {

  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';

  @Input()
  public book: Book;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _goodreads: GoodreadsService) { }

  ngOnInit() {
    //this.book = this._route.paramMap.switchMap((params: ParamMap) => 
    //  this._goodreads.getDetails(params.get('isbn')));

    //this.book = this._route.queryParamMap.switchMap((queryParamMap: ParamMap) =>
    //  this._goodreads.getDetails(queryParamMap.get('isbn')));
  }

}
