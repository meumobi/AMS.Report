import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { IEditor } from '../../models';
import { EditorProvider, UserProvider } from '../../providers';

@IonicPage({
  name: 'editor-details',
  segment: 'editor/details/:id'
})
@Component({
  selector: 'page-editor-details',
  templateUrl: 'editor-details.html',
})
export class EditorDetailsPage {

  editor: IEditor;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public editorService: EditorProvider,
    public userService: UserProvider
  ) {

    let key = this.navParams.data.id;
    
    this.editorService.fetchById(key).subscribe( data => {
      this.editor = data;
    })
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

  onSubmit({ value, valid }: { value: IEditor, valid: boolean }) {
    this.editorService.update(this.editor.$key, value)
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
