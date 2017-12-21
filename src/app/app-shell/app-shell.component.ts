import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent implements OnInit {

  constructor(
    private matIconRegistry: MatIconRegistry,    
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('lorgnette',
      domSanitizer.bypassSecurityTrustResourceUrl('/assets/lorgnette_24x24.svg'));
  }

  ngOnInit() {
  }

}
