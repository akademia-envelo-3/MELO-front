import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import ThemeComponent from '../../core/theme.component';

@NgModule({
  imports: [
    ThemeComponent,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            loadComponent: () => import('../ui/navbar/navbar.component'),
            outlet: 'navbar',
          },
          {
            path: 'events',
            loadChildren: () => import('../event/event.module'),
          },
          {
            path: 'units',
            loadChildren: () => import('../unit/unit.module'),
          },
          {
            path: 'admin',
            loadChildren: () => import('../../core/user/admin/admin.module'),
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
