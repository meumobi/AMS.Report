import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EditorAfService } from '../../providers';
import { Editor } from '../../models';

/**
 * Generated class for the EditorsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editors-list',
  templateUrl: 'editors-list.html',
})
export class EditorsListPage {
  editors: Editor[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public editorService: EditorAfService 
  ) { }

  addEditor() {

  }

  showOptions() {

  }
  
  ionViewDidLoad() {
    this.editorService.getEditors().subscribe((editors: Editor[]) => {
      this.editors = editors;
    });
  }

}
