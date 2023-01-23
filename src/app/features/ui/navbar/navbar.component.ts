import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { NotificationsQuantityComponent } from './notifications-quantity.component';
import { Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';

@Component({
  standalone: true,
  imports: [NotificationsQuantityComponent, NgIf, NgClass],
  selector: 'app-navbar',
  template: `
    <div class="navbar">
      <img (click)="navToHome()" class="logoImg" src="../assets/logo-icon.svg" />
      <div class="bell">
        <app-notifications-quantity *ngIf="notifications" class="bell__notification">{{
          notifications
        }}</app-notifications-quantity>
      </div>
      <div
        (click)="handleMenuActive()"
        class="menuMobileIcon"
        [ngClass]="{ active: menuActive === true, disactive: menuActive === false }"
      ></div>
    </div>
  `,
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  router = inject(Router);
  @Input() notifications?: number;
  menuActive = false;

  handleMenuActive() {
    this.menuActive = !this.menuActive;
  }

  navToHome() {
    this.router.navigate(['']);
  }
}
