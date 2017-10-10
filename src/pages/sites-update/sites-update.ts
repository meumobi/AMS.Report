import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { SitesProvider, UserProvider } from '../../providers';
import { Site } from '../../models';

/**
 * Generated class for the SitesUpdatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sites-update',
  templateUrl: 'sites-update.html',
})
export class SitesUpdatePage {

  site: Site;

  constructor(
    private db: AngularFireDatabase,
    public sitesService: SitesProvider,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public userService: UserProvider
  ) { 
    this.site = this.navParams.data.site;
    console.log(this.site);
    console.log('Name' + this.navParams.get('name'));
  }

  ionViewCanEnter(): boolean {
    let user = this.userService.getCurrent();

    return !!user;
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
