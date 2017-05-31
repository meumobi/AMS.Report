import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SiteDetailsPage } from './site-details';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SiteDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SiteDetailsPage),
    FormsModule
  ],
  exports: [
    SiteDetailsPage
  ]
})
export class SiteDetailsPageModule {}
