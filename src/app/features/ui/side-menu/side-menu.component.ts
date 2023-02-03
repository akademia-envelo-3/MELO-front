import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgFor, NgIf, TitleCasePipe, NgClass } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  MenuCategory,
  SideMenuStateService,
  SubCategory,
} from './side-menu.state.service';

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
    RouterModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  private sideMenuStateService = inject(SideMenuStateService);
  private router = inject(Router);
  private breakpointObserver = inject(BreakpointObserver);

  readonly DESKTOP_MEDIA_BREAKPOINT = '(min-width: 560px)';
  readonly breakpoint$ = this.breakpointObserver.observe([this.DESKTOP_MEDIA_BREAKPOINT]);
  menuCategories: MenuCategory[] = [];
  subCategories: SubCategory[] | undefined = [];
  isDesktopMenuVisible = false;
  isDesktop = false;
  selectedCategory = '';

  private wasInside = false;

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.wasInside) {
      this.isDesktopMenuVisible = false;
    }
    this.wasInside = false;
  }

  toggleMenu(category: MenuCategory, matMenuTrigger: MatMenuTrigger) {
    if (this.isDesktop) {
      this.checkIfShouldToggleVisibility(category.categoryName);
      this.updateDesktopCategoryData(category.categoryName);
    } else {
      this.updateMobileCategoryData(category, matMenuTrigger);
    }
    this.updateSelectedCategoryName(category.categoryName);
  }

  private checkIfShouldToggleVisibility(newCategoryName: string) {
    if (
      (this.isDesktopMenuVisible === false &&
        newCategoryName !== this.selectedCategory) ||
      newCategoryName === this.selectedCategory ||
      this.selectedCategory === ''
    ) {
      this.isDesktopMenuVisible = !this.isDesktopMenuVisible;
    }
  }

  private updateDesktopCategoryData(newCategoryName: string) {
    if (this.isDesktopMenuVisible) {
      this.subCategories = this.menuCategories.find(
        category => category.categoryName === newCategoryName
      )?.subCategories;
      this.closeDesktopMenuIfNoSubCategories();
    }
  }

  private updateSelectedCategoryName(categoryName: string) {
    this.selectedCategory = categoryName;
  }

  private updateMobileCategoryData(
    category: MenuCategory,
    matMenuTrigger: MatMenuTrigger
  ) {
    matMenuTrigger.menuData = { subCategories: category.subCategories };
    matMenuTrigger.openMenu();
  }

  private closeDesktopMenuIfNoSubCategories() {
    if (this.subCategories === undefined) {
      this.isDesktopMenuVisible = false;
    }
  }

  navigate(category: MenuCategory) {
    if (this.isDesktop) {
      this.updateDesktopCategoryData(category.categoryName);
    }
    this.updateSelectedCategoryName(category.categoryName);
    this.router.navigate([category.href]);
  }

  logout() {
    this.selectedCategory = 'logout';
    if (this.isDesktop) {
      this.updateDesktopCategoryData(this.selectedCategory);
    }
    return 'Logged out';
  }

  ngOnInit() {
    this.sideMenuStateService.sideMenuSetupState$.subscribe(sideMenuState => {
      this.menuCategories = sideMenuState.menuCategories;
    });
    this.breakpoint$.subscribe(() => {
      this.isDesktop = this.breakpointObserver.isMatched('(min-width: 560px)');
    });
  }
}
