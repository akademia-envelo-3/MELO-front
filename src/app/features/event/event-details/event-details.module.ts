import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { RemoveSpacesDirective } from '@shared/directives/remove-spaces.directive';
import { MatOptionHighlightDirective } from '@shared/directives/mat-option-highlight.directive';
import { RouterModule } from '@angular/router';

import { CircularButtonComponent } from '@shared/ui';
import {
  EventApiService,
  EventDetailsComponent,
  EventDetailsStateService,
  EventMemberList,
  MapComponent,
} from '..';

@NgModule({
  declarations: [EventDetailsComponent, MapComponent, EventMemberList],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatOptionHighlightDirective,
    MatFormFieldModule,
    RemoveSpacesDirective,
    MatFormFieldModule,
    MatRadioModule,
    CircularButtonComponent,
    CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: EventDetailsComponent,
      },
    ]),
  ],
  providers: [EventDetailsStateService, EventApiService],
})
export default class EventDetailsModule {}
