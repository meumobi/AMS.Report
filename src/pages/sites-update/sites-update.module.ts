import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { SitesUpdatePage } from './sites-update';

@NgModule({
  declarations: [
    SitesUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(SitesUpdatePage),
    TranslateModule.forChild()
  ],
  exports: [
    SitesUpdatePage
  ]
})
export class SitesUpdatePageModule {}
