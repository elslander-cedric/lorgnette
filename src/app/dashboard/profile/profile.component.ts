import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lorgnette-profile',
  template: `
    <mat-icon id='photo'>person</mat-icon>
    <div id='name'>{{ name }}</div>
  `,
  styles: [`

  #photo {
      display: flex;
      flex: 1 0 auto;    
      justify-content: center;
      font-size: 200px;      
    }

    #name {
      display: flex;
      flex: 1 0 auto;
      font: 2em Verdana;      
    }

    lorgnette-profile {
      display: flex;      
      flex: 1 0 auto;
      flex-direction: column;
      align-items: center;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  id: String = 'id';
  name: String = 'name';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe((params: ParamMap) => {
        this.id = params.get('id');
        this.name = params.get('name');
      });
  }



}
