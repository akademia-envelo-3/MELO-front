import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, SideMenuComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <app-navbar class="navbar" [notifications]="99"></app-navbar>
      <app-side-menu class="side-menu"></app-side-menu>
      <div class="content"><router-outlet></router-outlet></div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, SideMenuComponent],
})
export class HomeComponent {}
