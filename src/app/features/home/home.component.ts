import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, SideMenuComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-navbar [notifications]="99"></app-navbar>
    <app-side-menu></app-side-menu>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, SideMenuComponent],
})
export class HomeComponent {}
