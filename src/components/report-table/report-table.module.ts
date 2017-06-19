import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportTableComponent } from './report-table';

@NgModule({
  declarations: [
    ReportTableComponent
  ],
  imports: [
    IonicPageModule.forChild(ReportTableComponent),
  ],
  exports: [
    ReportTableComponent
  ]
})
export class ReportTableComponentModule {}
