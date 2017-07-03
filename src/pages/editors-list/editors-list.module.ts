import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EditorsListPage } from './editors-list';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  declarations: [
    EditorsListPage
  ],
  imports: [
    IonicPageModule.forChild(EditorsListPage),
    SharedModule
  ],
  exports: [
    EditorsListPage
  ]
})
export class EditorsListPageModule {}
