import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oo-footer-toolbar',
  template: `
    <mat-toolbar [ngClass]="['footer']">
      <!-- <mat-icon routerLink="['/scanner']"
        routerLinkActive="oo-active"
        [ngClass]="'oo-inactive'" svgIcon='lorgnette'></mat-icon> -->
      <mat-icon routerLink="/scanner" svgIcon='lorgnette'></mat-icon>
      <!-- <mat-icon routerLink="[/shelve,
        { outlets: { header: '[/header-search-toolbar]'}}]">local_library</mat-icon> -->
      <mat-icon routerLink="/shelve">local_library</mat-icon>
      <mat-icon routerLink="/login-oauth">person</mat-icon>
    </mat-toolbar>
  `,
  styles: [`
    mat-toolbar.footer {
        display: flex;
        flex: 1 0 auto;
    }

    mat-toolbar.footer * {
        display: flex;
        flex: 1 1 auto;
        justify-content: center;
    }

    .oo-inactive {
        filter: grayscale(100%);
    }

    .oo-active {
        filter: none;
    }

    mat-icon {
        outline: none;
    }
  `]
})
export class FooterToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
