import { NgModule } from '@angular/core';

import { SearchPipe } from '../pipes/search';

@NgModule({
  imports: [],
  declarations: [
    SearchPipe
  ],
  providers: [],
  exports: [
    SearchPipe
  ]
})
export class SharedModule { }