import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Http, Response } from '@angular/http';

import { SitesProvider } from '../../providers';
import { ISite } from '../../models';
import 'rxjs/add/operator/map';

import { DataTableModule } from 'primeng/primeng';

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
    private db: AngularFireDatabase,
    private http: Http
  ) {
    this.http.get('/assets/data.json')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.rep = data.reports["Le Rugbynistere"];
        console.log(this.rep);
      });

    
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

  calculateGroupTotal(groupFieldValue: string, field: string) {
    let total = 0;
    
    if(this.rep) {
        for(let raw of this.rep) {
            if(raw['inventaire'] === groupFieldValue) {
                total += raw[field];
            }
        }
    }

    return total;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitesReportPage');
  }

}
