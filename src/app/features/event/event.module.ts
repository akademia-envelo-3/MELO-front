import { NgModule } from '@angular/core';

import { CommonModule, DatePipe, NgClass, NgIf, UpperCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent, EventListComponent } from '.';
import { PowerIconComponent } from './power-icon/power-icon.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EventListComponent,
  },
];

@NgModule({
  declarations: [CardComponent, PowerIconComponent, EventListComponent],
  imports: [
    NgIf,
    NgClass,
    DatePipe,
    UpperCasePipe,
    MatIconModule,
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [CardComponent, PowerIconComponent],
})
export default class EventModule {}
