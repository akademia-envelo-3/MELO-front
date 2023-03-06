import { NgFor, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CircularButtonComponent, SpinnerDotsComponent } from '@shared/ui';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { HashtagListComponent } from './hashtags/hashtag-list/hashtag-list.component';

import StatisticsComponent from './hashtags/statistics.component';
import { TableItemsComponent } from './shared/table-items.component';

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
