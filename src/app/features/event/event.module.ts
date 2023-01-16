import { NgModule } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { CardComponent } from '.';

@NgModule({
  declarations: [CardComponent],
  imports: [NgIf, NgClass],
  exports: [CardComponent],
})
export default class EventModule {}
