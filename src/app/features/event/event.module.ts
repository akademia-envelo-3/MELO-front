import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import {
  CardComponent,
  EventApiService,
  EventListComponent,
  PowerIconComponent,
} from '.';

@NgModule({
  declarations: [
    EventListComponent,
    CardComponent,
    PowerIconComponent,
    EventFormComponent,
  ],
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: 'new-event',
        component: EventFormComponent,
      },
    ]),
    CommonModule,
  ],
  exports: [CardComponent, PowerIconComponent],
  providers: [EventApiService],
})
export default class EventModule {}
