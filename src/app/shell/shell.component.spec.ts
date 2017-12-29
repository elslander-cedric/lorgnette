import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellComponent } from './shell.component';
import { MaterialModule } from '@oo/material.module';
import { WebSocketService } from '@oo/websocket.service';
import { DashboardModule } from '@oo/dashboard/dashboard.module';
import { LoginOauthComponent } from '@oo/login-oauth/login-oauth.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '@oo/app-routing.module';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShellComponent,
        LoginOauthComponent
      ],
      imports: [
        MaterialModule,
        DashboardModule,
        RouterModule,
        AppRoutingModule
      ],
      providers: [
        WebSocketService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
