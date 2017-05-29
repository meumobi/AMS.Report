import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitesDetailPage } from './sites-detail';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SitesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SitesDetailPage),
    FormsModule
  ],
  exports: [
    SitesDetailPage
  ]
})
export class SitesDetailPageModule {}
