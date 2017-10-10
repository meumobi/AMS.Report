import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, NavParams } from 'ionic-angular';

import { SitesProvider, EditorProvider, UserProvider } from '../../providers';
import { ISite, IEditor } from '../../models';

@IonicPage({
  name: 'site-details',
  segment: 'site/details/:id'
})
@Component({
  selector: 'page-site-details',
  templateUrl: 'site-details.html',
})
export class SiteDetailsPage {

  site: ISite;
  editor: IEditor;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public sitesService: SitesProvider,
    public editorService: EditorProvider,
    public userService: UserProvider
  ) {
    let key = this.navParams.data.id;

    this.sitesService.fetchById(key).subscribe(data => {
      this.site = data;
      this.loadEditor(this.site.editor_id);
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

  loadEditor(editorId) {
    this.editorService.fetchById(editorId)
      .subscribe(data => {
        this.editor = data;
        console.log(this.editor.name);
      })
  }

  isUndefined(val) { return typeof val === 'undefined'; }

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