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
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import {
  CardComponent,
  EventFormComponent,
  EventsComponent,
  EventsThemeComponent,
} from '.';
import { noProductionGuard } from '@shared/no-production.guard';

@NgModule({
  declarations: [
    EventsThemeComponent,
    EventsComponent,
    CardComponent,
    PowerIconComponent,
    EventFormComponent,
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatStepperModule,
    ReactiveFormsModule,
    CommonModule,
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
