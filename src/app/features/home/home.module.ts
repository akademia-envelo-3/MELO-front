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
        component: HomeComponent,
        children: [],
      },
    ]),
  ],
})
export default class HomeModule {}
