import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lorgnette-login-oauth',
  template: `
    <div fxLayout="column">
        <iframe src="/oauth"></iframe>
    </div>
  `,
  styles: [`
  
    div {
      display: flex;
      flex: 1 1 auto;
    }

    iframe {
      display: flex;
      flex: 1 1 auto;
      border: none;
    }

  `]
})
export class LoginOauthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
