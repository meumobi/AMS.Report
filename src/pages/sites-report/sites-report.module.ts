import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitesReportPage } from './sites-report';
import { HttpModule } from '@angular/http';

import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    SitesReportPage,
  ],
  imports: [
    IonicPageModule.forChild(SitesReportPage),
    DataTableModule,
    HttpModule,
    SharedModule

  ],
  exports: [
    SitesReportPage
  ]
})
export class SitesReportPageModule {}
