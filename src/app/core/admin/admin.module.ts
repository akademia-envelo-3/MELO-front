import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InboxComponent } from './inbox/inbox.component';

@NgModule({
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    NgClass,
    MatIconModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminComponent,
        children: [
          {
            path: 'hashtags/stats',
            loadComponent: () => import('./hashtags/statistics.component'),
          },
          {
            path: 'inbox',
            component: InboxComponent,
          },
        ],
      },
    ]),
  ],
  declarations: [InboxComponent],
})
export default class AdminModule {}
