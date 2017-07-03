import { Component, Input } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';

import { SitesProvider } from '../../providers';
import { EditorProvider } from '../../providers';
import { IEditor } from '../../models';

@IonicPage({
    name: 'editors-list',
    segment: 'editors'
})
@Component({
  selector: 'page-editors-list',
  templateUrl: 'editors-list.html',
})
export class EditorsListPage {
  editors: IEditor[];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public sitesService: SitesProvider,
    public editorService: EditorProvider 
  ) {
    this.editorService.fetchAll()
    .subscribe(
      data => {
        this.editors = data;
      },
      err => {
        console.log('error');
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

  addEditor() {
    let prompt = this.alertCtrl.create({
      title: 'Editor Name',
      message: "Enter a name for this new editor you're so keen on adding",
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
            this.editorService.create(data.name)
            .then((editor) => {
              this.navCtrl.push('editor-details', {
                'id': editor.key
              })
            })
            .catch(err => console.log(err, 'You do not have access!'));
          }
        }
      ]
    });
    prompt.present();
  }

  openSitesList(editor: IEditor) {
    this.navCtrl.push('sites-list', {
      'editor_id': editor.$key
    })
  }

  removeEditor($event, editor: IEditor) {
    $event.stopPropagation();
    let alert = this.alertCtrl.create({
      title: 'Confirm deletion',
      message: 'Do you want to remove this editor?',
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
            this.editorService.delete(editor.$key)
              .then(_ => {
                this.presentToast('Editor removed successfully');
              })
              .catch(err => console.log(err, 'You do not have access!'));
          }
        }
      ]
    });
    alert.present();
  }

  updateEditor($event, editor: IEditor) {
    $event.stopPropagation();
    this.navCtrl.push('editor-details', {
      'id': editor.$key
    })
  }
}
