import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { InboxComponent } from './inbox.component';

@NgModule({
  imports: [
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
