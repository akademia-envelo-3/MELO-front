import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NotificationsQuantityComponent } from './notifications-quantity.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [NotificationsQuantityComponent, NgIf],
  selector: 'app-navbar',
  template: `
    <div class="navbar">
      <img class="logoImg" src="../assets/logo-icon.svg" />
      <div class="bell">
        <app-notifications-quantity *ngIf="notifications" class="bell__notification">{{
          notifications
        }}</app-notifications-quantity>
      </div>
      <div class="menuMobileIcon"></div>
    </div>
  `,
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() notifications?: number;

  
}
