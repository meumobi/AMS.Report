import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorsListPage } from './editors-list';

import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    EditorsListPage,
  ],
  imports: [
    AngularFireModule,
    IonicPageModule.forChild(EditorsListPage),
  ],
  exports: [
    EditorsListPage
  ]
})
export class EditorsListPageModule {}
