import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '@features/auth';
import { NavbarComponent } from '../ui';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-navbar [notifications]="99"></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent],
})
export class HomeComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit() {
    this.authService.autoLogin();
  }
}
