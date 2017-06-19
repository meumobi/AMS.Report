import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitesReportPage } from './sites-report';
import { HttpModule } from '@angular/http';
import { ReportHeaderComponent } from '../../components/report-header/report-header';
import { ReportTableComponent } from '../../components/report-table/report-table';
import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    SitesReportPage,
    ReportHeaderComponent,
    ReportTableComponent,
  ],
  imports: [
    IonicPageModule.forChild(SitesReportPage),
    DataTableModule,
    HttpModule,
    SharedModule,
  ],
  exports: [
    SitesReportPage
  ]
})
export class SitesReportPageModule {}
