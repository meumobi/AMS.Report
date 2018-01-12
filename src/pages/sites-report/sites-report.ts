import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { groupRowsBy } from './../../helpers/helpers';

import { ModalController } from 'ionic-angular';
import { CalendarModal } from "ion2-calendar";
import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { SitesProvider, UserProvider } from './../../providers';
import { ISite, IUser } from './../../models';
import 'rxjs/add/operator/map';

//import { DataTableModule } from 'primeng/primeng';
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
  latestSafeCompiledDate: Moment;
  rep: any[];
  plainData;
  user: IUser;
  isAdmin: boolean;
  role: string;
  roles: string[] = ["editor", "admin"];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sitesService: SitesProvider,
    public loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    public modalCtrl: ModalController,
    public userService: UserProvider
  ) {
    this.user = userService.getCurrent();
    
    if (this.user) {
      this.isAdmin = (this.user.role == 'admin');
      this.role = this.user.role;
    }
  }

  ionViewCanEnter(): boolean {
    let user = this.userService.getCurrent();

    return !!user;
  }
  
  toggleRole() {
    this.role = this.roles[(this.roles.indexOf(this.role) + 1) % this.roles.length];
  }

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
    this.query.orderByKey = true;
    this.query.startAt = this.rangeFilter.startAt.format('YYYY-MM-DD');
    this.query.endAt = this.rangeFilter.endAt.format('YYYY-MM-DD');
  }

  getQueryOrderedByChildAndRange(range, filtersPrefix) {
    let startDate = range.startAt.format('YYYY-MM-DD');
    let endDate = range.endAt.format('YYYY-MM-DD');
    
    let query = {
      orderByChild: filtersPrefix ? 'group' : 'date',
      startAt: filtersPrefix ? filtersPrefix + '_' +  startDate : startDate,
      endAt: filtersPrefix ? filtersPrefix + '_' +  endDate : endDate
    }

    return query;
  }

  downloadPlainCSV(){ 
    if (this.plainData) {
      new Angular2Csv(this.plainData, "plain",{
        showLabels: true,
        fieldSeparator: ';',
        quoteStrings: '',
        headers: Object.keys(this.plainData[0]),
      });
    }
  }

  fetchDataByQuery() {
    let loader = this.loadingCtrl.create({
      content: 'Getting latest entries...',
    });

    loader.present().then(() => {
      let path = '/reports/';

      let siteName = this.site.title ? this.site.title.toLowerCase() : null;
      let query = this.getQueryOrderedByChildAndRange(this.rangeFilter, siteName);
      
      console.log(query);
      return this.db.list(path, {query: query})
      .subscribe(
        data => {
          console.log('Dd data fetched');
          var raws = {};
          
          data.forEach(group => {
            Object.assign(raws, group['raws']);
          });

          var result = Object.keys(raws).map((key)=>raws[key]);

          console.log("Result's length: " + Object.keys(result).length);

          if (Object.keys(result).length) {  
            this.plainData = result;
            this.rep = groupRowsBy(result, 'inventaire');
          } else {
            this.plainData = null;
            this.rep = groupRowsBy(result, 'inventaire');
          }
          loader.dismiss();   
        },
        err => {
          loader.dismiss();
          console.log('error');
        });
    });  
  }

  getLatestSafeCompiledDate(){
    let path = '/settings/';
    this.db.object(path)
    .subscribe(
      data => {        
        this.latestSafeCompiledDate = moment(data.latestSafeCompiledDate);
      },
      err => {
        console.log('error');
      }
    );    
  }

  openCalendar() {
    let myCalendar = this.modalCtrl.create(CalendarModal, {
      options: {
        pickMode:'range',
        isSaveHistory:true,
        canBackwardsSelected: true
      }
    });    
    myCalendar.present();    
    myCalendar.onDidDismiss((res:any) => {
      if (res){
        this.rangeFilter = {
          startAt: moment(res.from.time),
          endAt: moment(res.to.time)
        }
        this.fetchDataByQuery();
      }
    });
  }
   
  ionViewDidLoad() {
    let siteId = this.navParams.data.id;

    this.sitesService.fetchById(siteId)
      .subscribe( siteSnap => {
        this.site = siteSnap;
        this.last7days();
        this.getLatestSafeCompiledDate();
      }
    );
  }
}