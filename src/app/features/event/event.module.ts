import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsComponent } from './events.component';

@NgModule({
  declarations: [EventFormComponent, EventsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full',
      },
      {
        path: 'events',
        component: EventsComponent,
      },
      {
        path: 'new-event',
        component: EventFormComponent,
      },
    ]),
  ],
})
export default class EventModule {}
