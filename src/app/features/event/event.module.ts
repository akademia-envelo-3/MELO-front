import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PowerIconComponent } from '@shared/ui';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  CardComponent,
  EventApiService,
  EventListComponent,
  EventsThemeComponent,
  HashtagsComponent,
} from '.';
import { noProductionGuard } from '@shared/no-production.guard';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@NgModule({
  declarations: [
    EventsThemeComponent,
    HashtagsComponent,
    CardComponent,
    PowerIconComponent,
    EventListComponent,
  ],
  imports: [
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    HighlightDirective,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: 'new-event-theme',
        component: EventsThemeComponent,
      },
    ]),
    CommonModule,
  ],
  exports: [CardComponent, PowerIconComponent],
  providers: [EventApiService],
})
export default class EventModule {}
