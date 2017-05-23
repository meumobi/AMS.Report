import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

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