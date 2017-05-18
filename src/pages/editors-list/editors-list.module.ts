import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { EditorsListPage } from './editors-list';
import { EditorAfService } from '../../providers';


@NgModule({
  declarations: [
    EditorsListPage,
  ],
  imports: [
    HttpModule,
    AngularFireModule,
    IonicPageModule.forChild(EditorsListPage),
  ],
  exports: [
    EditorsListPage
  ],
  providers: [EditorAfService]
})
export class EditorsListPageModule {}
