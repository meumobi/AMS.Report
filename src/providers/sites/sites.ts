import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import 'rxjs/add/operator/map';

import { Site } from '../../models';

/*
  Generated class for the SitesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SitesProvider {

  items: FirebaseListObservable<any>;

  constructor(
    public db: AngularFireDatabase
  ) {
    this.items = db.list('/sites');
  }

  create(value: Site) {
    const site = this.items.push(value);
    console.log(site);
    console.log('key:' + site.key);
    return site;
  }

  update(value: Site) {
    return this.items.push(value);
  }
}
