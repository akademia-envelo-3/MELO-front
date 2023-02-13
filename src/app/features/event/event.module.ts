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
  EventFormComponent,
  EventsComponent,
  EventsThemeComponent,
  HashtagsComponent,
} from '.';
import { noProductionGuard } from '@shared/no-production.guard';
import { HighlightPipe } from '@shared/pipes/highlightPipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';

@NgModule({
  declarations: [
    EventsThemeComponent,
    EventsComponent,
    HashtagsComponent,
    CardComponent,
    PowerIconComponent,
    EventFormComponent,
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
    HighlightDirective,
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
        path: 'theme',
        canMatch: [noProductionGuard],
        component: EventsThemeComponent,
      },
    ]),
  ],
  exports: [CardComponent, PowerIconComponent],
})
export default class EventModule {}
