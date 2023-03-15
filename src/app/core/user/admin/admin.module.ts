import { NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CircularButtonComponent, SpinnerDotsComponent } from '@shared/ui';
import {
  AdminComponent,
  CategoryListComponent,
  HashtagListComponent,
  TableItemsComponent,
} from '.';
import StatisticsComponent from './hashtags/statistics.component';

@NgModule({
  declarations: [StatisticsComponent, CategoryListComponent, HashtagListComponent],
  imports: [
    NgFor,
    NgIf,
    NgClass,
    AsyncPipe,
    SpinnerDotsComponent,
    MatTableModule,
    MatIconModule,
    CircularButtonComponent,
    TableItemsComponent,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'categories',
            component: CategoryListComponent,
          },
          {
            path: 'hashtags',
            component: HashtagListComponent,
          },
          {
            path: 'hashtags/stats',
            component: StatisticsComponent,
          },
        ],
      },
    ]),
  ],
})
export default class AdminModule {}
