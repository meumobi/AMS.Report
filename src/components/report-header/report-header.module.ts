import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ReportHeaderComponent } from './report-header';

@NgModule({
  declarations: [
    ReportHeaderComponent,
  ],
  imports: [
    IonicPageModule.forChild(ReportHeaderComponent),
  ],
  exports: [
    ReportHeaderComponent
  ]
})
export class ReportHeaderComponentModule {}
