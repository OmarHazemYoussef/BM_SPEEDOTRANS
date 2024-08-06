import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritePopUpComponent } from './favourite-pop-up.component';

@NgModule({
  declarations: [FavouritePopUpComponent],
  imports: [CommonModule],
  exports: [FavouritePopUpComponent] // Export if you need it elsewhere
})
export class FavouritePopUpModule {}
