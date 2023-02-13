import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgClass } from '@angular/common';
import { NotificationsQuantityComponent } from './notifications-quantity.component';
import { SearchbarComponent } from '../searchbar-ui/searchbar/searchbar.component';

@Component({
  standalone: true,
  imports: [NotificationsQuantityComponent, NgIf, NgClass, SearchbarComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
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
