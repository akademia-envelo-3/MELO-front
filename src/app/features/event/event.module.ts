import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsComponent } from './events.component';
import { HashtagsComponent } from './event-form/hashtags.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PowerIconComponent } from '@shared/ui';

@NgModule({
  declarations: [
    EventFormComponent,
    EventsComponent,
    HashtagsComponent,
    PowerIconComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'events',
        component: EventsComponent,
        children: [
          {
            path: '/new-event',
            component: EventFormComponent,
          },
        ],
      },
    ]),
  ],
})
export default class EventModule {}
