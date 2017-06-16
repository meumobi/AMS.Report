import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';

import { SitesProvider, EditorProvider } from '../../providers';
import { ISite, IEditor } from '../../models';

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
  editor: IEditor;

  constructor(
    public sitesService: SitesProvider,
    public editorService: EditorProvider,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams
  ) {
    let editorId = this.navParams.data.editor_id;

    if (editorId) {
      this.loadEditor(editorId);
    } else {
      this.sitesService.fetchAll()
        .subscribe(data => {
          this.sites = data;
        });
    }    
  }

  loadSites(editorId) {
    this.sitesService.fetchByEditorId(editorId)
      .subscribe(data => {
        this.sites = data;
      })
  }

  loadEditor(editorId) {
    this.editorService.fetchById(editorId)
        .subscribe( data => {
          this.editor = data;
          console.log(this.editor.name);
          this.loadSites(this.editor.$key);
        })
  }

  openSiteReport(site: ISite) {
    this.navCtrl.push('sites-report', {
      'id': site.$key
    })
  }

  updateSite($event, site: ISite) {
    $event.stopPropagation();
    this.navCtrl.push('site-details', {
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

  isUndefined(val) { return typeof val === 'undefined'; }

  addSite(editorId: string) {
    let prompt = this.alertCtrl.create({
      title: 'Site Name',
      message: "Enter a name for this new site you're so keen on adding",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.sitesService.create(data.name, editorId)
            .then((site) => {
              this.navCtrl.push('site-details', {
                'id': site.key
              })
            })
            .catch(err => console.log(err, 'Can\'t create Site!'));
          }
        }
      ]
    });
    prompt.present();
  }

  openSite($event, site: ISite) {
    $event.stopPropagation();
    window.open(site.url);
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