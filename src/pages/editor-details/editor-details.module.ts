import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { EditorDetailsPage } from './editor-details';

@NgModule({
  declarations: [
    EditorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditorDetailsPage),
    TranslateModule.forChild(),
    FormsModule
  ],
  exports: [
    EditorDetailsPage
  ]
})
export class EditorDetailsPageModule {}
