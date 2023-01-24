import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';

import { Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { NotificationsQuantityComponent } from './notifications-quantity.component';

@Component({
  standalone: true,
  imports: [NotificationsQuantityComponent, NgIf, NgClass],
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <img (click)="navToHome()" class="navbar__logoImg" src="../assets/app-logo.png" />
      <div class="navbar__bell">
        <app-notifications-quantity
          *ngIf="notifications"
          class="navbar__bell__notification"
          >{{ notifications }}</app-notifications-quantity
        >
      </div>
      <div
        (click)="toggleMenu()"
        class="navbar__menu-mobile-icon"
        [ngClass]="{ active: menuActive, inactive: !menuActive }"
      ></div>
    </nav>
  `,
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private router = inject(Router);
  @Input() notifications?: number;
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  navToHome() {
    this.router.navigate(['']);
  }
}
