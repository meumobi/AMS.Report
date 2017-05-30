import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IEditor } from '../../models';
import { EditorProvider } from '../../providers';

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
    public editorService: EditorProvider
  ) {

    let key = this.navParams.data.id;
    
    this.editorService.fetchById(key).subscribe( data => {
      this.editor = data;
    })
  }

  onSubmit({ value, valid }: { value: IEditor, valid: boolean }) {
    console.log(value, valid);
  }

  cancel() {
    this.navCtrl.pop();
  }

}
