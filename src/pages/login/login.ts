import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IUser } from '../../models';
import { UserProvider, AuthProvider } from '../../providers';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage({
    name: 'login',
    segment: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: FormGroup; // = {} as IUser;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.user = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.user.value, this.user.valid);
  }

  login() {

  }

  forgotPassword() {

  }
}
