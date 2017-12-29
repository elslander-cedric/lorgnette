import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oo-header-toolbar',
  template: `
    <mat-toolbar [ngClass]="['header']">
      <span fxFlex>{{ title }}</span>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar.header {
      display: flex;
      flex: 1 0 auto;
      font-family: 'Great Vibes', cursive;
      font-size: xx-large;
    }
  `]
})
export class HeaderToolbarComponent implements OnInit {

  public title = 'Lorgnette';

  constructor() { }

  ngOnInit() {
  }

}
