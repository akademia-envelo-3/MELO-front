import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  template: `<app-side-menu></app-side-menu><router-outlet></router-outlet> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
