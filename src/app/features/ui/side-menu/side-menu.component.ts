import { Subscription } from 'rxjs';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgFor, NgIf, TitleCasePipe, NgClass, AsyncPipe } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenuCategory, SideMenuStateService } from './side-menu.state.service';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatSidenavModule,
    TitleCasePipe,
    NgFor,
    NgIf,
    NgClass,
    AsyncPipe,
    RouterModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit, OnDestroy {
  private sideMenuStateService = inject(SideMenuStateService);
  private router = inject(Router);
  private subscriptions = new Subscription();
  menuCategories: MenuCategory[] = [];
  isDesktopMenuVisible = false;
  isDesktop = false;
  // isResizing = false;
  selectedCategory: MenuCategory = { categoryName: '' };
  private wasInside = false;
  disableAnimations = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.sideMenuStateService.setDesktopMenuVisibility(false);
    }
    this.wasInside = false;
  }

  toggleMenu(category: MenuCategory, matMenuTrigger: MatMenuTrigger) {
    this.sideMenuStateService.toggleMenu(category, matMenuTrigger);
  }

  navigate(category: MenuCategory) {
    this.sideMenuStateService.updateSelectedCategory(category);
    this.router.navigate([category.href]);
  }

  logout() {
    this.sideMenuStateService.updateSelectedCategory({ categoryName: 'logout' });
    return 'Logged out';
  }

  ngOnInit() {
    const sub = this.sideMenuStateService.sideMenuSetupState$.subscribe(sideMenuState => {
      this.menuCategories = sideMenuState.menuCategories;
      this.selectedCategory = sideMenuState.selectedCategory;
      this.isDesktopMenuVisible = sideMenuState.isDesktopMenuVisible;
    });
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
