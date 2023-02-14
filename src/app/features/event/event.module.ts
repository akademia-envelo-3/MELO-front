import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  CardComponent,
  EventApiService,
  EventListComponent,
  PowerIconComponent,
} from '.';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CardComponent, PowerIconComponent, EventListComponent],
  imports: [
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
    ]),
    CommonModule,
  ],
  exports: [CardComponent, PowerIconComponent],
  providers: [EventApiService],
})
export default class EventModule {}
