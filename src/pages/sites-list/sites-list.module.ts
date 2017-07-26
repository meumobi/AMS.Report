import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { TranslateModule } from '@ngx-translate/core';

import { SitesListPage } from './sites-list';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    SitesListPage,
  ],
  imports: [
    AngularFireModule,
    IonicPageModule.forChild(SitesListPage),
    SharedModule,
    TranslateModule.forChild()
  ],
  exports: [
    SitesListPage
  ]
})
export class SitesListPageModule {}
