import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lorgnette-shelve',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [`
    lorgnette-shelve {
        display: flex;
        flex: 1 1 auto;
    }

    lorgnette-book-card-list {
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
