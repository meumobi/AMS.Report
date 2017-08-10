import { NgModule } from '@angular/core';

import { SearchPipe } from '../pipes/search';
import { ThumbImagePipe } from '../pipes/thumbImage';

@NgModule({
  imports: [],
  declarations: [
    SearchPipe,
    ThumbImagePipe
  ],
  providers: [],
  exports: [
    SearchPipe,
    ThumbImagePipe
  ]
})
export class SharedModule { }