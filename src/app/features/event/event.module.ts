import { NgModule } from '@angular/core';
import { DatePipe, NgClass, NgIf, UpperCasePipe } from '@angular/common';
import { PowerIconComponent } from '@shared/ui';
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
import { CardComponent } from '.';

@NgModule({
  declarations: [
    EventFormComponent,
    EventsComponent,
    HashtagsComponent,
    PowerIconComponent,
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    DatePipe,
    NgClass,
    NgIf,
    UpperCasePipe,
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
