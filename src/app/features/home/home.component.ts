import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <router-outlet>
      <app-navbar [notifications]="99"></app-navbar>
    </router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent],
})
export class HomeComponent {}
