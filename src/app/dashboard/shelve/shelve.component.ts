import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oo-shelve',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    oo-shelve {
        display: flex;
        flex: 1 1 auto;
    }

    oo-book-card-list {
        display: flex;
        flex: 1 1 auto;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ShelveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
