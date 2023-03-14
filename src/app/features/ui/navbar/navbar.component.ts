import { SideMenuStateService } from './../side-menu/side-menu.state.service';
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf, NgClass, AsyncPipe } from '@angular/common';
import { NotificationsQuantityComponent } from './notifications-quantity.component';
import { MatIconModule } from '@angular/material/icon';
import { EventDetailsStateService } from '@features/event';
import { SearchbarComponent } from '../searchbar-ui/searchbar/searchbar.component';
import { FiltrSortButtonOutput } from '../filter-search-button';
import { FilterSearchButtonComponent } from '../filter-search-button';

@Component({
  standalone: true,
  imports: [
    NotificationsQuantityComponent,
    NgIf,
    NgClass,
    SearchbarComponent,
    AsyncPipe,
    FilterSearchButtonComponent,
    MatIconModule,
  ],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  @Input() notifications?: number;
  protected showEventMembersIcon = false;
  private router = inject(Router);
  private sideMenuStateService = inject(SideMenuStateService);
  private eventDetailsService = inject(EventDetailsStateService);

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
    this.eventDetailsService.toggleMembers();
  }

  ngOnInit() {
    this.eventDetailsService.canActivateMembersIcon(this.router.url, window.innerWidth);
  }

  navToHome() {
    this.router.navigate(['']);
  }

  eventSortFiltr(arg: FiltrSortButtonOutput<'events'>) {
    arg.nameSort;
    arg.dateSort;
  }
}
