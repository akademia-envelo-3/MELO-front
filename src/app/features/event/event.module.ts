import { NgModule } from '@angular/core';

import { DatePipe, NgClass, NgIf, UpperCasePipe } from '@angular/common';

import { PowerIconComponent } from '@shared/ui';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '.';

@NgModule({
  declarations: [CardComponent, PowerIconComponent],
  imports: [NgIf, NgClass, DatePipe, UpperCasePipe, MatIconModule],
  exports: [CardComponent, PowerIconComponent],
})
export default class EventModule {}
