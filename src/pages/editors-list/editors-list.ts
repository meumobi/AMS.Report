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
  @Input() search: string = "";

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public sitesService: SitesProvider,
    public editorService: EditorProvider 
  ) {}

ionViewDidLoad() {
  this.editorService.fetchAll()
    .subscribe(data => {
      this.editors = data;
    });
};

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
            this.navCtrl.push('sites-detail', {
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

  openSitesList(editor: IEditor) {
    this.navCtrl.push('sites-list', {
      'editor_id': editor.$key
    })
  }

showOptions(editor: IEditor) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete Editor',
        role: 'destructive',
        handler: () => {
          this.removeEditor(editor.$key);
        }
      },{
        text: 'List Sites',
        handler: () => {
          this.openSitesList(editor);
        }
      },{
        text: 'Add Site',
        handler: () => {
          this.addSite(editor.$key);
        }
      },{
        text: 'Update Editor',
        handler: () => {
          this.updateEditor(editor);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}

  removeEditor(editorId: string) {
    this.editorService.delete(editorId)
    .then(_ => this.presentToast('Editor removed successfully'))
    .catch(err => console.log(err, 'You do not have access!'));
  }

  updateEditor(editor) {
    this.navCtrl.push('editor-details', {
      'id': editor.$key,
      editor: editor
    })
  }
}
