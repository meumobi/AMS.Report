import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { 
  AngularFireDatabase, 
  FirebaseListObservable, 
  FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase/app';

import { IUser, User } from '../../models';
import { AuthProvider } from './../auth/auth';

@Injectable()
export class UserProvider {

  items$: FirebaseListObservable<IUser[]>;
  current: IUser;
  roles: Object;
  //currentObserver: any;


  constructor(
    public db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public auth: AuthProvider
  ) {
    this.items$ = db.list('/users');
    this.roles = {
      ADMIN: "admin",
      EDITOR: "editor"
    }
/*
    this.current = Observable.create(observer => {
      this.currentObserver = observer;
    });
 */ 
  }

  getCurrent(): IUser {
    console.log('getCurrentUser');
    return this.current;
  }

  setCurrent(user: IUser) {
    this.current = user;
  }

  getRoles() {
    return Object.keys(this.roles).map(k => this.roles[k]);
  }

  create(email: string, editorId: string) {
    return this.auth.signupUser(email, 'admysports')
      .then(
        user => {
          console.log(user);
          return this.items$.push(new User(user.email, editorId));
      })
  }

  update(id: string, changes: IUser) {
    /*
      Remove undefined properties or it should raise
      "firebase set failed first argument contains undefined in property"
    */ 
    Object.keys(changes).forEach(key => changes[key] === undefined && delete changes[key])
    return this.items$.update(id, changes);
  }

  delete(id: string) {
    return this.items$.remove(id);
  }

  resetPassword(email: string){
    return this.auth.resetPassword(email);
  }

  fetchById(id: string): FirebaseObjectObservable<IUser> {
    return this.db.object(`users/${id}`);
  }

  fetchByEmail(email: string): FirebaseListObservable<IUser[]> {
    return this.db.list('/users', 
    {
      query: {
        orderByChild: 'email',
        equalTo: email
      }
    });
  }  

  fetchByEditorId(editorId: string): FirebaseListObservable<IUser[]> {
    return this.db.list('/users', 
    {
      query: {
        orderByChild: 'editor_id',
        equalTo: editorId
      }
    });
  }

  fetchAll(): FirebaseListObservable<IUser[]> {
    return this.items$;
  }
}
