import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { UsersListPage } from './users-list';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    UsersListPage
  ],
  imports: [
    IonicPageModule.forChild(UsersListPage),
    SharedModule,
    TranslateModule.forChild()
  ],
  exports: [
    UsersListPage
  ]
})
export class UsersListPageModule {}
