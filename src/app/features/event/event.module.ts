import { NgModule } from '@angular/core';
import { DatePipe, NgClass, NgIf, UpperCasePipe } from '@angular/common';
import { CardComponent } from '.';

@NgModule({
  declarations: [CardComponent],
  imports: [NgIf, NgClass, DatePipe, UpperCasePipe],
  exports: [CardComponent],
})
export default class EventModule {}
