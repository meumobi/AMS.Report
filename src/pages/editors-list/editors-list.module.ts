import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorsListPage } from './editors-list';

@NgModule({
  declarations: [
    EditorsListPage,
  ],
  imports: [
    IonicPageModule.forChild(EditorsListPage),
  ],
  exports: [
    EditorsListPage
  ]
})
export class EditorsListPageModule {}
