import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { SitesProvider } from '../../providers';
import { ISite, Site } from '../../models';

/**
 * Generated class for the SitesReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'sites-report',
  segment: 'report/:id'
})
@Component({
  selector: 'page-sites-report',
  templateUrl: 'sites-report.html',
})
export class SitesReportPage {

  site: ISite;
  reports: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sitesService: SitesProvider,
    private db: AngularFireDatabase
  ) {
    let siteId = this.navParams.data.id;

    this.sitesService.fetchById(siteId)
      .subscribe( siteSnap => {
        this.site = siteSnap;
      }
    );
    
    let query: {orderByChild?: string, startAt?: string, endAt?: string} = {};

    if (this.site) {
      query.orderByChild = 'date';
      query.startAt = "2017-03-02";
      query.endAt = "2017-03-04";
    }

    this.reports = db.list('/reports/' + this.site.title, {query: query});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitesReportPage');
  }

}
