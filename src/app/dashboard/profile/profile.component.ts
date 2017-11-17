import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lorgnette-profile',
  template: `
    <h2>Profile</h2>
    <router-outlet></router-outlet>  
  `,
  styles: [`
    lorgnette-profile {
      display: flex;
      flex: 1 1 auto;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
