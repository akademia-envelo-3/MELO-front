import { SideMenuStateService } from './../side-menu/side-menu.state.service';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import { NotificationsQuantityComponent } from './notifications-quantity.component';
import { MatIconModule } from '@angular/material/icon';
import { EventDetailsStateService } from '@features/event';

@Component({
  standalone: true,
  imports: [NotificationsQuantityComponent, NgIf, NgClass, AsyncPipe, MatIconModule],
  selector: 'app-navbar',
  template: `
    <nav class="navbar">
      <img (click)="navToHome()" class="navbar__logoImg" src="../assets/app-logo.png" />
      <div class="navbar__buttons">
        <button class="navbar__bell image-layout--center">
          <app-notifications-quantity
            *ngIf="notifications"
            class="navbar__bell__notification"
            >{{ notifications }}</app-notifications-quantity
          >
        </button>
        <ng-container *ngIf="showMembersIcon$ | async">
          <button (click)="toggleEventMembers()">
            <mat-icon class="navbar__members-icon">people</mat-icon>
          </button>
        </ng-container>
        <button
          class="navbar__hamburger"
          [ngClass]="{
            change: (sideMenuState$ | async)?.isMobileMenuActive
          }"
          (click)="toggleMenu()"
        >
          <div class="navbar__hamburger__bar1"></div>
          <div class="navbar__hamburger__bar2"></div>
          <div class="navbar__hamburger__bar3"></div>
        </button>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  @Input() notifications?: number;
  protected showEventMembersIcon = false;
  private router = inject(Router);
  private sideMenuStateService = inject(SideMenuStateService);
  private eventDetailsService = inject(EventDetailsStateService);

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.eventDetailsService.canActivateMembersIcon(this.router.url, window.innerWidth);
  }

  get sideMenuState$() {
    return this.sideMenuStateService.setupState$;
  }

  get showMembersIcon$() {
    return this.eventDetailsService.selectShowEventMembersIcon$;
  }

  toggleMenu() {
    this.sideMenuStateService.toggleMobileMenuVisibility();
  }

  toggleEventMembers() {
    this.eventDetailsService.toggleMembersView();
  }

  ngOnInit() {
    this.eventDetailsService.canActivateMembersIcon(this.router.url, window.innerWidth);
  }

  navToHome() {
    this.router.navigate(['']);
  }
}
