import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SitesProvider } from '../../providers';
import { Site } from '../../models';

/**
 * Generated class for the SitesDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'sites-detail',
  segment: 'detail/:id'
})
@Component({
  selector: 'page-sites-detail',
  templateUrl: 'sites-detail.html',
})
export class SitesDetailPage {

  site: Site;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.site = this.navParams.data.site;
    // db.object("/sites/-KjNtAwN5BBERmdFX54S");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitesDetailPage');
  }

}
