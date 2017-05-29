import { Component, Input } from '@angular/core';
import { IonicPage, NavController, AlertController, ActionSheetController, ToastController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { SitesProvider } from '../../providers';
import { Editor } from '../../models';
import { EditorSearchPipe } from '../../pipes';

@IonicPage()
@Component({
  selector: 'page-editors-list',
  templateUrl: 'editors-list.html',
})
export class EditorsListPage {
  editors: FirebaseListObservable<any>;
  @Input() search: string = "";

  constructor(
    private db: AngularFireDatabase,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public navParams: NavParams,
    public sitesService: SitesProvider 
  ) { 
    this.editors = db.list('/editors');
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
          this.editors.push({
            name: data.name
          })
          .then(_ => this.presentToast('Editor added successfully'))
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

  openSitesList(editor: Editor) {
    this.navCtrl.push('SitesListPage', {
      'editor_id': editor.$key
    })
  }

showOptions(editor: Editor) {
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
    this.editors.remove(editorId)
    .then(_ => this.presentToast('Editor removed successfully'))
    .catch(err => console.log(err, 'You do not have access!'));
  }

  updateEditor(editor) {
    this.navCtrl.push('editors-details', {
      'id': editor.$key,
      editor: editor
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorsListPage');
  }
}
