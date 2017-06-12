import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Http, Response } from '@angular/http';

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
    private db: AngularFireDatabase,
    private elRef:ElementRef,
    private http: Http
  ) {

  }

  ionViewDidLoad() {
    this.http.get('/assets/data.json')
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.rep = data.reports["Le Rugbynistere"];
        //console.log(this.rep);
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

    this.db.list('/reports/' + this.site.title, {query: query}).subscribe(
      data => {
        this.rep = data;
        console.log('========= Rep');
        console.log(this.rep);
        console.log('========= Reports');
        console.log(this.reports);
        console.log('========= Site');
        console.log(this.site);
        ReactPivot(el, {
          rows: this.rep,
          dimensions: dimensions,
          calculations: calculations,
          reduce: reduce,
          activeDimensions: ['Inventaire', 'Site'],
          nPaginateRows: 20
        })
      },
      err => {
        console.log('error');
      });

    /*
    var rows = [
      {"firstName":"Victor","lastName":"Dias","state":"NY","transaction":{"amount":"399.73","date":"2012-02-02T08:00:00.000Z","business":"Kozey-Moore","name":"Checking Account 2297","type":"deposit","account":"82741327"}},
      {"firstName":"Jean-Baptiste","lastName":"Dalle","state":"NY","transaction":{"amount":"768.84","date":"2012-02-02T08:00:00.000Z","business":"Herman-Langworth","name":"Money Market Account 9344","type":"deposit","account":"95753704"}},
      {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"399.73","date":"2012-02-02T08:00:00.000Z","business":"Kozey-Moore","name":"Checking Account 2297","type":"deposit","account":"82741327"}},
      {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"768.84","date":"2012-02-02T08:00:00.000Z","business":"Herman-Langworth","name":"Money Market Account 9344","type":"deposit","account":"95753704"}}
    ];    
    */

    var dimensions = [
      {value: 'annonceur', title: 'Annonceurs'},
      {value: 'format', title: 'Format'},
      {value: 'position', title: 'Position'},
      {value: 'site', title: 'Site'},
      {value: 'inventaire', title: 'Inventaire'}
    ];
    var reduce = function(row, memo) {
      memo.imprPrisesTotal = (memo.imprPrisesTotal || 0) + parseFloat(row['impressions prises']);
      memo.imprEnvoyeesTotal = (memo.imprEnvoyeesTotal || 0) + parseFloat(row['impressions envoyees']);
      memo.imprRecuesTotal = (memo.imprRecuesTotal || 0) + parseFloat(row['impressions reçues']);
      memo.revenuTotal = (memo.revenuTotal || 0) + parseFloat(row.revenu);
      memo.cpm = (1000 * memo.revenuTotal/memo.imprPrisesTotal);
      //memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
      //memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
      return memo
    };
    var calculations = [
      {
        value: 'imprPrisesTotal', title: 'Impr. prises',
        template: function(val, row) {
          return val;
        }
      },
      {
        value: 'imprEnvoyeesTotal', title: 'Impr. envoyées',
        template: function(val, row) {
          return val;
        }
      },
      {
        value: 'imprRecuesTotal', title: 'Impr. reçues',
        template: function(val, row) {
          return val;
        }
      },
      {
        value: 'revenuTotal', title: 'Revenus',
        template: function(val, row) {
          return '€' + val.toFixed(2)
        }
      },
      {
        value: 'cpm', title: 'CPM',
        template: function(val, row) {
          return val.toFixed(2)
        }
      }
    ];

    var el = this.elRef.nativeElement.querySelector('#react-pivot');
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

}
