import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from '../ui';

@NgModule({
  imports: [
    SideMenuComponent,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'events',
            component: HomeComponent,
          },
          {
            path: 'events/my-events',
            component: HomeComponent,
          },
          {
            path: 'events/new-event',
            component: HomeComponent,
          },
          {
            path: 'events/new-category',
            component: HomeComponent,
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
