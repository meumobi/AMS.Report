import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';

import { SitesProvider } from '../../providers';
import { Site, ISite } from '../../models';

@IonicPage({
  name: 'sites-detail',
  segment: 'detail/:id'
})
@Component({
  selector: 'page-sites-detail',
  templateUrl: 'sites-detail.html',
})
export class SitesDetailPage {

  site: ISite;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public sitesService: SitesProvider
  ) {
    let key = this.navParams.data.id;
    
    this.sitesService.fetchById(key).subscribe( data => {
      this.site = data;
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

  onSubmit({ value, valid }: { value: ISite, valid: boolean }) {
    this.sitesService.update(this.site.$key, value)
    .then(_ => {
      this.presentToast('Site updated successfully');
      this.navCtrl.pop();
    })
    .catch(err => console.log(err, 'You do not have access!'));
  }

  cancel() {
    this.navCtrl.pop();
  }

}
