import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oo-dashboard',
  template: `
    <router-outlet name="header"></router-outlet>
    <router-outlet ></router-outlet>
    <router-outlet name="footer"></router-outlet>
  `,
  styles: [`
    oo-dashboard {
        height: 100%;
        display: flex;
        flex-flow: column;
    }

    oo-header-toolbar, oo-footer-toolbar {
        display: flex;
        flex: 0 0 auto;
    }

    oo-scanner, oo-login-oauth {
        display: flex;
        flex: 1 1 auto;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

    constructor(
      private router: Router,
      private route: ActivatedRoute) {
      console.log('routes known to dashboard module:', this.router.config);
    }

  ngOnInit() {}

  private shelve(): void {
    this.router.navigate(['shelve', { relativeTo: this.route }]);
  }
}
