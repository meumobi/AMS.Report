import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorsDetailsPage } from './editors-details';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditorsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditorsDetailsPage),
    FormsModule
  ],
  exports: [
    EditorsDetailsPage
  ]
})
export class EditorsDetailsPageModule {}
