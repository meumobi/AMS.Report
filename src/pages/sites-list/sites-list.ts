import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';

import { SitesProvider } from '../../providers';
import { ISite } from '../../models';
import { IEditor } from '../../models';

@IonicPage({
    name: 'sites-list',
    segment: 'sites'
})
@Component({
  selector: 'page-sites-list',
  templateUrl: 'sites-list.html',
})
export class SitesListPage {

  sites: ISite[];

  constructor(
    public sitesService: SitesProvider,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams
  ) {
    let editorId = this.navParams.data.editor_id;

    if (editorId) {
      this.sitesService.fetchByEditor(editorId)
        .subscribe(data => {
          this.sites = data;
        })
    } else {
      this.sitesService.fetchAll()
        .subscribe(data => {
          this.sites = data;
        });
    }
  }

  openSiteReport(site: ISite) {
    this.navCtrl.push('sites-report', {
      'id': site.$key
    })
  }

  openSiteDetails($event, site: ISite) {
    $event.stopPropagation();
    this.navCtrl.push('sites-detail', {
      'id': site.$key
    })
  }

  removeSite($event, site: ISite) {
    $event.stopPropagation();
    let alert = this.alertCtrl.create({
      title: 'Confirm deletion',
      message: 'Do you want to remove this site?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Remove',
          handler: () => {
            this.sitesService.delete(site.$key)
              .then(_ => {
                this.presentToast('Site removed successfully');
              })
              .catch(err => console.log(err, 'You do not have access!'));
          }
        }
      ]
    });
    alert.present();
  }

  openSite($event, site: ISite) {
    $event.stopPropagation();
    window.open(site.url);
  }

  changeEditor(editorId) {
    this.sitesService.fetchByEditor(editorId)
      .subscribe(data => {
        this.sites = data;
      });
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
