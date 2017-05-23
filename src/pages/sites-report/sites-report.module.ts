import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitesReportPage } from './sites-report';

@NgModule({
  declarations: [
    SitesReportPage,
  ],
  imports: [
    IonicPageModule.forChild(SitesReportPage),
  ],
  exports: [
    SitesReportPage
  ]
})
export class SitesReportPageModule {}
