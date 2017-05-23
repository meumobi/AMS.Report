import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { SitesProvider } from '../../providers';
import { Site } from '../../models';
import { Editor } from '../../models';


/**
 * Generated class for the SitesListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sites-list',
  templateUrl: 'sites-list.html',
})
export class SitesListPage {

  sites: FirebaseListObservable<Site[]>;
  editor: Editor; 

  constructor(
    private db: AngularFireDatabase,
    public sitesService: SitesProvider,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams
  ) { 
    this.editor = this.navParams.data.editor;
    let query: {orderByChild?: string, equalTo?: string} = {};

    if (this.editor) {
      query.orderByChild = 'editor_id';
      query.equalTo = this.editor.$key;
    }
    
    this.sites = db.list('/sites', {query: query});
  }

  openSiteReport(site: Site) {
    this.navCtrl.push('sites-report', {
      'id': site.$key,
      site: site
    })
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
