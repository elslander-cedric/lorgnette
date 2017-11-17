import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lorgnette-header-search-toolbar',
  template: `
    <mat-toolbar [ngClass]="['header']" fxLayoutAlign="end">
      <mat-icon routerLink="/search">search</mat-icon>
    </mat-toolbar>
`,
  styles: [`
    mat-icon {
        outline: none;
    }
  `]
})
export class HeaderSearchToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
