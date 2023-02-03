import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { EventFormThemeComponent } from './event-form/event-form-theme.component';
import { HighlightPipe } from '../../shared/pipes/hihglightPipe';

@NgModule({
  declarations: [
    EventFormComponent,
    EventsComponent,
    HashtagsComponent,
    CardComponent,
    PowerIconComponent,
    EventFormThemeComponent,
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    CommonModule,
    HighlightPipe,
    RouterModule.forChild([
      {
        path: '',
        component: EventsComponent,
      },
      {
        path: 'new-event',
        component: EventFormComponent,
      },
      {
        path: 'new-event-theme',
        component: EventFormThemeComponent,
      },
    ]),
  ],
  exports: [CardComponent, PowerIconComponent],
})
export default class EventModule {}
