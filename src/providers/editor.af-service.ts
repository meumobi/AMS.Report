import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Editor } from '../models';

@Injectable()
export class EditorAfService {

  constructor(
    private db: AngularFireDatabase 
  ) {}

  //getEditors(): Observable<Editor[]> {
  getEditors(): FirebaseListObservable<any> {
    return this.db.list('/editors');
  }
}