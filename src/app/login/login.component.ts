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
  selector: 'lorgnette-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usernameFormControl: FormControl;
  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

    this.usernameFormControl = new FormControl('', [ Validators.required ]);

    let loginValidator: ValidatorFn = (formGroup: FormGroup) => { 
      return formGroup.get('password').value.match('@|=$') ? null : { 'complexity': true };
    }

    this.loginForm = this.formBuilder.group({
      'username': this.usernameFormControl,
      'password': ['', Validators.required, Validators.minLength],
    }, { 'validator': loginValidator });
  }

  public login(): void {
    console.log("login");
  }

}
