import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  CardComponent,
  EventApiService,
  EventListComponent,
  PowerIconComponent,
  EventDetailsComponent,
} from '.';
import { RouterModule } from '@angular/router';
import { CircularButtonComponent } from '@shared/ui';

@NgModule({
  declarations: [
    CardComponent,
    PowerIconComponent,
    EventListComponent,
    EventDetailsComponent,
  ],
  imports: [
    MatIconModule,
    CircularButtonComponent,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: 'details/:id',
        component: EventDetailsComponent,
      },
    ]),
    CommonModule,
  ],
  exports: [CardComponent, PowerIconComponent],
  providers: [EventApiService],
})
export default class EventModule {}
