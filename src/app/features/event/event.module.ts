import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  CardComponent,
  EventApiService,
  EventListComponent,
  PowerIconComponent,
} from '.';
import { RouterModule } from '@angular/router';
import { SpinnerDotsComponent } from '@shared/ui';

@NgModule({
  declarations: [CardComponent, PowerIconComponent, EventListComponent],
  imports: [
    MatIconModule,
    InfiniteScrollModule,
    SpinnerDotsComponent,
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
