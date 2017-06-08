import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsersListPage } from './users-list';

@NgModule({
  declarations: [
    UsersListPage,
  ],
  imports: [
    IonicPageModule.forChild(UsersListPage),
  ],
  exports: [
    UsersListPage
  ]
})
export class UsersListPageModule {}
