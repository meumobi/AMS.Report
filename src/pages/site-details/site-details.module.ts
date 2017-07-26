import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteDetailsPage } from './site-details';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    SiteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteDetailsPage),
    FormsModule,
    TranslateModule.forChild()
  ],
  exports: [
    SiteDetailsPage
  ]
})
export class SiteDetailsPageModule {}
