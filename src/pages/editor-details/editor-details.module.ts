import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditorDetailsPage } from './editor-details';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditorDetailsPage),
    FormsModule
  ],
  exports: [
    EditorDetailsPage
  ]
})
export class EditorDetailsPageModule {}
