import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

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
        ],
      },
    ]),
  ],
})
export default class AdminModule {}
