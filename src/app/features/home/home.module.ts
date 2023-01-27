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
            path: '',
            component: HomeComponent,
            children: [
              {
                path: 'events/my-events',
                component: ThemeComponent,
              },
              {
                path: 'events/new-event',
                component: ThemeComponent,
              },
              {
                path: 'events/new-category',
                component: ThemeComponent,
              },
              {
                path: '**',
                loadComponent: () =>
                  import('../../shared/page-not-found/page-not-found.component'),
              },
            ],
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
