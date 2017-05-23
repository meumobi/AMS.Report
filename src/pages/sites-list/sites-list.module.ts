import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SitesListPage } from './sites-list';

import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    SitesListPage,
  ],
  imports: [
    AngularFireModule,
    IonicPageModule.forChild(SitesListPage),
  ],
  exports: [
    SitesListPage
  ]
})
export class SitesListPageModule {}
