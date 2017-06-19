import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Http, Response } from '@angular/http';
import { groupRowsBy } from '../../helpers/helpers';

import { SitesProvider } from '../../providers';
import { ISite } from '../../models';
import 'rxjs/add/operator/map';

import { DataTableModule } from 'primeng/primeng';

declare var ReactPivot: any;

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
  rep: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sitesService: SitesProvider,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private elRef:ElementRef,
    private http: Http
  ) {

  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: 'Getting latest entries...',
      //dismissOnPageChange: true
    });

    loader.present().then(() => {
      return this.db.list('/reports/' + this.site.title, {query: query})
      .subscribe(
        data => {
          console.log('Dd data fetched');
          if (Object.keys(data).length) {
            this.rep = groupRowsBy(data, 'inventaire');
          } 
          loader.dismiss();   
        },
        err => {
          loader.dismiss();
          console.log('error');
        });
    });
    
    let siteId = this.navParams.data.id;

    this.sitesService.fetchById(siteId)
      .subscribe( siteSnap => {
        this.site = siteSnap;
        console.log('========= Site');
        console.log(this.site);
      }
    );
    
    let query: {orderByChild?: string, startAt?: string, endAt?: string} = {};

    /*
    if (this.site) {
      query.orderByChild = 'date';
      query.startAt = "2017-03-02";
      query.endAt = "2017-03-09";
    }    
    */
  }
}
