import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Editor } from '../../models';

@IonicPage({
  name: 'editors-details',
  segment: 'editors/details/:id'
})
@Component({
  selector: 'page-editors-details',
  templateUrl: 'editors-details.html',
})
export class EditorsDetailsPage {

  editor: Editor = {name: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if (this.navParams.data.editor) {
      this.editor = this.navParams.data.editor
      console.log('Editor: ' + this.editor.name);
    }
  }

  onSubmit({ value, valid }: { value: Editor, valid: boolean }) {
    console.log(value, valid);
  }

  cancel() {
    this.navCtrl.pop();
  }

}
