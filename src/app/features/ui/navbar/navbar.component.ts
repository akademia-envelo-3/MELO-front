import { SideMenuStateService } from './../side-menu/side-menu.state.service';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import { NotificationsQuantityComponent } from './notifications-quantity.component';

@Component({
  standalone: true,
  imports: [NotificationsQuantityComponent, NgIf, NgClass, AsyncPipe],
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
        class="navbar__hamburger"
        [ngClass]="{
          change: (sideMenuStateService.sideMenuSetupState$ | async)?.isMobileMenuActive
        }"
        (click)="toggleMenu()"
      >
        <div class="navbar__hamburger__bar1"></div>
        <div class="navbar__hamburger__bar2"></div>
        <div class="navbar__hamburger__bar3"></div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private router = inject(Router);
  sideMenuStateService = inject(SideMenuStateService);
  @Input() notifications?: number;

  toggleMenu() {
    this.sideMenuStateService.toggleMobileMenuVisibility();
  }

  navToHome() {
    this.router.navigate(['']);
  }
}
