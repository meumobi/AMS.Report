import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitesUpdatePage } from './sites-update';

@NgModule({
  declarations: [
    SitesUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(SitesUpdatePage),
  ],
  exports: [
    SitesUpdatePage
  ]
})
export class SitesUpdatePageModule {}
