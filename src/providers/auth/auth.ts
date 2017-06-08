import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { IUser } from '../../models';


@Injectable()
export class AuthProvider {

  constructor(private af2Auth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  registerUser(user: IUser) {
    return this.af2Auth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

}
