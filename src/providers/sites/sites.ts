import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ISite, Site } from '../../models';

/*
  Generated class for the SitesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SitesProvider {

  items$: FirebaseListObservable<any>;
  editorSubject = new ReplaySubject(1)

  constructor(
    public db: AngularFireDatabase
  ) {
    this.items$ = db.list('/sites', 
    {
      query: {
        orderByChild: 'editor_id',
        equalTo: this.editorSubject
      }
    });
  }

  create(title: string, editorId: string) {
    return this.items$.push(new Site(title, editorId));
  }

  update(siteId, changes: any) {
    return this.items$.update(siteId, changes);
  }

  delete(siteId: string) {
    return this.items$.remove(siteId);
  }

  fetchById(key: string): FirebaseObjectObservable<ISite> {
    return this.db.object(`sites/${key}`);
  }

  fetchByEditor(editorId: string): FirebaseListObservable<ISite[]> {
    this.editorSubject.next(editorId);
    return this.items$;
  } 
}
