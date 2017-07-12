import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http } from '@angular/http';
import { groupRowsBy } from '../../helpers/helpers';

import { SitesProvider } from '../../providers';
import { ISite } from '../../models';
import 'rxjs/add/operator/map';

//import { DataTableModule } from 'primeng/primeng';
import { CalendarController } from "ion2-calendar/dist";
import * as moment from 'moment';
import { Moment } from 'moment';

@IonicPage({
  name: 'sites-report',
  segment: 'report/:id'
})
@Component({
  selector: 'page-sites-report',
  templateUrl: 'sites-report.html',
  providers: []
})

export class SitesReportPage {

  site: ISite;
  reports: FirebaseListObservable<any>;
  query: {orderByKey?: boolean, orderByChild?: string, startAt?: string, endAt?: string} = {};
  rangeFilter: {startAt?: Moment, endAt?: Moment} = {};
  rep: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sitesService: SitesProvider,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private elRef:ElementRef,
    private http: Http,
    public calendarCtrl: CalendarController
  ) {}

  last7days() {
    this.rangeFilter = {
      startAt: moment().subtract(7, 'days'),
      endAt: moment().subtract(1, 'days')
    }

    this.fetchDataByQuery();
  }

  last30days() {
    this.rangeFilter = {
      startAt: moment().subtract(30, 'days'),
      endAt: moment().subtract(1, 'days')
    }

    this.fetchDataByQuery();
  }

  lastMonth() {
    this.rangeFilter = {
      startAt: moment().subtract(1, 'month').startOf('month'),
      endAt: moment().subtract(1, 'month').endOf('month')
    }

    this.fetchDataByQuery();
  }

  currentMonth() {
    this.rangeFilter = {
      startAt: moment().startOf('month'),
      endAt: moment()
    }

    this.fetchDataByQuery();
  }

  formatQuery() {
    //this.query.orderByChild = 'date';
    this.query.orderByKey = true;
    this.query.startAt = this.rangeFilter.startAt.format('YYYY-MM-DD');
    this.query.endAt = this.rangeFilter.endAt.format('YYYY-MM-DD');
  }

  fetchDataByQuery() {
    let loader = this.loadingCtrl.create({
      content: 'Getting latest entries...',
      //dismissOnPageChange: true
    });

    loader.present().then(() => {
      let path = '/reports/' + this.site.title.toLowerCase();
      console.log(path);
      console.log(this.query);
      let query = {
        orderByKey: true,
        startAt: this.rangeFilter.startAt.format('YYYY-MM-DD'),
        endAt: this.rangeFilter.endAt.format('YYYY-MM-DD')
      }
      
      console.log(query);
      return this.db.list(path, {query: query})
      .subscribe(
        data => {
          console.log('Dd data fetched');
          console.log(data);
          var raws = {};

          var array = convertToArrayOfLeaves(data)

          data.forEach(partenaires => {
            for (var partenaire in partenaires) {
              if (partenaires.hasOwnProperty(partenaire)) {
                Object.assign(raws, partenaires[partenaire]);
              }
            }
          });

          var result = Object.keys(raws).map((key)=>raws[key]);

          console.log(result);
          if (Object.keys(result).length) {
            this.rep = groupRowsBy(result, 'inventaire');
          } else {

          }
          loader.dismiss();   
        },
        err => {
          loader.dismiss();
          console.log('error');
        });
    });  
  }

  openCalendar() {
    this.calendarCtrl.openCalendar({
      //from: new Date(),
      isRadio: false,
      isSaveHistory:true,
      canBackwardsSelected: true,
    })
      .then( (res:any) => { 
        console.log('open Calendar')
        console.log(res) })
      .catch( () => {} )
  }
  
  ionViewDidLoad() {

    let siteId = this.navParams.data.id;

    this.sitesService.fetchById(siteId)
      .subscribe( siteSnap => {
        this.site = siteSnap;
        console.log('========= Site');
        console.log(this.site);
      }
    );

    this.last7days();
  }
}
