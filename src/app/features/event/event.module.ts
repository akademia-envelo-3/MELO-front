import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  PowerIconComponent,
} from '.';
import { noProductionGuard } from '@shared/no-production.guard';
import { RemoveSpacesDirective } from '@shared/directives/remove-spaces.directive';
import { MatOptionHighlightDirective } from '@shared/directives/mat-option-highlight.directive';
import { EventsThemeComponent } from './event-form/event-theme.component';
import { HashtagsComponent } from './event-form/hashtags/hashtags.component';

@NgModule({
  declarations: [
    EventsThemeComponent,
    HashtagsComponent,
    CardComponent,
    PowerIconComponent,
    EventListComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatOptionHighlightDirective,
    MatFormFieldModule,
    MatAutocompleteModule,
    RemoveSpacesDirective,
    RouterModule.forChild([
      {
        path: '',
        component: EventListComponent,
      },
      {
        path: 'theme',
        component: EventsThemeComponent,
        canMatch: [noProductionGuard],
      },
    ]),
    CommonModule,
  ],
  exports: [CardComponent, PowerIconComponent],
  providers: [EventApiService],
})
export default class EventModule {}
