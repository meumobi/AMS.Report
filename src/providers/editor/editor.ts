import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { IEditor, Editor } from '../../models';

@Injectable()
export class EditorProvider {

  items$: FirebaseListObservable<IEditor[]>;

  constructor(
    public db: AngularFireDatabase
  ) {
    this.items$ = db.list('/editors');
  }

  create(name: string) {
    return this.items$.push(new Editor(name));
  }

  update(id: string, changes: IEditor) {
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

  fetchById(id: string): FirebaseObjectObservable<IEditor> {
    return this.db.object(`editors/${id}`);
  }

  fetchAll(): FirebaseListObservable<IEditor[]> {
    return this.items$;
  }
}
