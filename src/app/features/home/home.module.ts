import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from '../ui';
import ThemeComponent from '../../core/theme.component';

@NgModule({
  imports: [
    SideMenuComponent,
    ThemeComponent,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'events',
            component: HomeComponent,
            children: [
              {
                path: 'my-events',
                component: ThemeComponent,
              },
              {
                path: 'new-event',
                component: ThemeComponent,
              },
              {
                path: 'new-category',
                component: ThemeComponent,
              },
            ],
          },
        ],
      },
      {
        path: '**',
        loadComponent: () =>
          import('../../shared/page-not-found/page-not-found.component'),
      },
    ]),
  ],
})
export default class HomeModule {}
