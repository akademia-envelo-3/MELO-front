import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';

import { EventFormComponent } from './event-form/event-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import {
  CardComponent,
  EventApiService,
  EventListComponent,
  PowerIconComponent,
} from '.';
import { noProductionGuard } from '@shared/no-production.guard';
import { RemoveSpacesDirective } from '@shared/directives/remove-spaces.directive';
import { MatOptionHighlightDirective } from '@shared/directives/mat-option-highlight.directive';
import { EventsThemeComponent } from './event-form/event-theme.component';
import { HashtagsComponent } from './event-form/hashtags/hashtags.component';
import { RouterModule } from '@angular/router';
import { CircularButtonComponent, SpinnerDotsComponent } from '@shared/ui';

@NgModule({
  declarations: [
    EventsThemeComponent,
    HashtagsComponent,
    EventListComponent,
    CardComponent,
    PowerIconComponent,
    EventFormComponent,
  ],
  imports: [
    InfiniteScrollModule,
    SpinnerDotsComponent,
    ReactiveFormsModule,
    MatChipsModule,
    MatIconModule,
    MatOptionHighlightDirective,
    MatFormFieldModule,
    MatAutocompleteModule,
    RemoveSpacesDirective,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonModule,
    CircularButtonComponent,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: 'details',
        loadChildren: () => import('./event-details/event-details.module'),
      },
      {
        path: 'theme',
        component: EventsThemeComponent,
        canMatch: [noProductionGuard],
      },
      {
        path: 'new-event',
        component: EventFormComponent,
      },
    ]),
  ],
  exports: [CardComponent, PowerIconComponent],
  providers: [EventApiService],
})
export default class EventModule {}
