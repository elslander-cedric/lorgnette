import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '@oo/auth.service';
import { Observable } from 'rxjs/Rx';
import { ValidateFn } from 'codelyzer/walkerFactory/walkerFn';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  RequiredValidator,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oo-login',
  template: `
    <div>
      <h2>Login</h2>

      <form autocomplete="off" (ngSubmit)="login()" [formGroup]="loginForm" fxLayoutAlign="center" fxLayout="column">
        <mat-form-field>
          <input matInput placeholder="username" [formControl]="usernameFormControl">
          <mat-error *ngIf="usernameFormControl.hasError('required')">
            user name is
            <strong>required</strong>
          </mat-error>
        </mat-form-field>
        <mat-form-field>
          <input matInput type="password" placeholder="password" minlength="8" formControlName="password">
          <mat-error *ngIf="loginForm.get('password').hasError('minlength')">
            password is too short
          </mat-error>
          <mat-error *ngIf="loginForm.get('password').hasError('complexity')">
            password should contain at least one of the following characters: @|=$
          </mat-error>
        </mat-form-field>

        <button mat-raised-button type="submit" color="primary">Go</button>
      </form>
    </div>
  `,
  styles: [``]
})
export class LoginComponent implements OnInit {

  public usernameFormControl: FormControl;
  public loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit() {

    this.usernameFormControl = new FormControl('', [Validators.required]);

    const loginValidator: ValidatorFn = (formGroup: FormGroup) => {
      return null; // formGroup.get('password').value.match('@|=$') ? null : { 'complexity': true } as ValidationErrors;
    };

    this.loginForm = this.formBuilder.group({
      'username': this.usernameFormControl,
      'password': ['', Validators.required/*, Validators.minLength(8)*/]
    }, { 'validator': loginValidator });
  }

  public login(): void {
    this.authService.login().subscribe(() => {
      if (this.authService.authenticated) {
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([this.authService.redirectUrl], navigationExtras);
      }
    });
  }

  public logout() {
    this.authService.logout();
  }
}
