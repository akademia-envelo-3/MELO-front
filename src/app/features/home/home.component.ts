import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent, SideMenuComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-navbar [notifications]="99"></app-navbar>
    <app-side-menu></app-side-menu>
    <div class="container"><router-outlet></router-outlet></div>
  `,
  styles: ['.container { padding-left: 110px; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, SideMenuComponent],
})
export class HomeComponent {}
