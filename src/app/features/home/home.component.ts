import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideMenuComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <router-outlet name="navbar"></router-outlet>
    <!-- <app-navbar [notifications]="99"></app-navbar> -->
    <app-side-menu></app-side-menu>
    <div class="container"><router-outlet></router-outlet></div>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SideMenuComponent],
})
export class HomeComponent {}
