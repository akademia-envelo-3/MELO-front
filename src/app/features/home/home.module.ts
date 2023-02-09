import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: '', redirectTo: 'events', pathMatch: 'full' },
          {
            path: 'events',
            loadChildren: () => import('../event/event.module'),
          },
          {
            path: 'units',
            loadChildren: () => import('../unit/unit.module'),
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
