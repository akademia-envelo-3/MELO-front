import { NgModule } from '@angular/core';
import { DatePipe, NgClass, NgIf, UpperCasePipe } from '@angular/common';

import { PowerIconComponent } from '@shared/ui';
import { CardComponent } from '.';

@NgModule({
  declarations: [CardComponent],
  imports: [NgIf, NgClass, DatePipe, UpperCasePipe, PowerIconComponent],
  exports: [CardComponent],
})
export default class EventModule {}
