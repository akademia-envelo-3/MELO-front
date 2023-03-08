import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@features/auth';
import { NavbarComponent, SideMenuComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-navbar [notifications]="99"></app-navbar>
    <app-side-menu></app-side-menu>
    <div class="container"><router-outlet></router-outlet></div>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, SideMenuComponent],
})
export class HomeComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit() {
    this.authService.autoLogin();
  }
}
