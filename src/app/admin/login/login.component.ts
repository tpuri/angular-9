import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _fb: FormBuilder) { }

  loginForm: FormGroup;
  isValid: boolean;
  FormValue: Object;
  submitClicked: boolean;
  hideSharedComponent: boolean;


  ngOnInit() {
    this.initForm();
    this.loginForm.valueChanges.subscribe(() => {
      this.hideSharedComponent = true;
    })
  }

  initForm() {
    return this.loginForm = this._fb.group({
      username: ['', Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])]
    })
  }

  onSubmit(value, event) {
    event.preventDefault();
    this.hideSharedComponent = false;
    this.submitClicked = true;
    this.isValid = this.loginForm.valid;
    this.FormValue = this.loginForm.value;
  }

  resetForm() {
    this.loginForm.reset();
  }

  autoFillForm(loginForm, event) {
    loginForm.patchValue({username: 'twinkle', password: 'welcome'});
  }

}
