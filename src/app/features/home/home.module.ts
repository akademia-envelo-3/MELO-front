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
            loadChildren: () => import('src/app/features/event/event.module'),
          },
          {
            path: 'units',
            loadChildren: () => import('src/app/features/unit/unit.module'),
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
