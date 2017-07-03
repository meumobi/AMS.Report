import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UsersListPage } from './users-list';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    UsersListPage
  ],
  imports: [
    IonicPageModule.forChild(UsersListPage),
    SharedModule
  ],
  exports: [
    UsersListPage
  ]
})
export class UsersListPageModule {}
