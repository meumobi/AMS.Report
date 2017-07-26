import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { UserDetailsPage } from './user-details';

@NgModule({
  declarations: [
    UserDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserDetailsPage),
    TranslateModule.forChild()
  ],
  exports: [
    UserDetailsPage
  ]
})
export class UserDetailsPageModule {}
