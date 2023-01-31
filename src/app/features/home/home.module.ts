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
            path: 'events',
            component: ThemeComponent,
            children: [],
          },
        ],
      },
    ]),
  ],
})
export default class HomeModule {}
