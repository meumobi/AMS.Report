import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitesDetailPage } from './sites-detail';

@NgModule({
  declarations: [
    SitesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SitesDetailPage),
  ],
  exports: [
    SitesDetailPage
  ]
})
export class SitesDetailPageModule {}
