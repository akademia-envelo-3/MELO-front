import { SideMenuStateService } from './../side-menu/side-menu.state.service';
import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import { NotificationsQuantityComponent } from './notifications-quantity.component';
import { SearchbarComponent } from '../searchbar-ui/searchbar/searchbar.component';

@Component({
  standalone: true,
  imports: [NotificationsQuantityComponent, NgIf, NgClass, SearchbarComponent, AsyncPipe],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
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
