import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BehaviorSubject, of } from 'rxjs';
import { MENU_CATEGORIES_EMPLOYEE, MENU_CATEGORIES_ADMIN } from './menu-category.data';

export type SubCategory = {
  subCategoryName: string;
  href: string;
};

export type MenuCategory = {
  categoryName: string;
  categoryIcon?: string;
  href?: string;
  subCategories?: SubCategory[];
};

export type SideMenuState = {
  menuCategories: MenuCategory[];
  selectedCategory: MenuCategory;
  isDesktopMenuVisible: boolean;
  isDesktop: boolean;
  isMobileMenuActive: boolean;
};

const defaultSelectedCategory = { categoryName: '' };

const defaultSideMenuData = {
  menuCategories: [],
  selectedCategory: defaultSelectedCategory,
  isDesktopMenuVisible: false,
  isDesktop: false,
  isMobileMenuActive: false,
};

@Injectable({
  providedIn: 'root',
})
export class SideMenuStateService {
  private breakpointObserver = inject(BreakpointObserver);
  readonly DESKTOP_MEDIA_BREAKPOINT = '(min-width: 560px)';
  readonly breakpoint$ = this.breakpointObserver.observe([this.DESKTOP_MEDIA_BREAKPOINT]);

  private setupState$$ = new BehaviorSubject<SideMenuState>(defaultSideMenuData);

  get setupState$() {
    return this.setupState$$.asObservable();
  }

  get setupStateValue() {
    return this.setupState$$.value;
  }

  private patchState(stateSlice: Partial<SideMenuState>) {
    this.setupState$$.next({
      ...this.setupStateValue,
      ...stateSlice,
    });
  }

  updateSelectedCategory(category: MenuCategory) {
    this.patchState({ selectedCategory: category });
    if (category.subCategories === undefined) {
      this.setDesktopMenuVisibility(false);
    }
  }

  toggleMenu(category: MenuCategory, matMenuTrigger: MatMenuTrigger) {
    const isDesktop = this.setupStateValue.isDesktop;
    const shouldToggleDesktopVisibility = this.checkIfShouldToggleDesktopVisibility(
      category.categoryName
    );

    if (isDesktop) {
      if (shouldToggleDesktopVisibility) {
        this.toggleDesktopMenuVisibility();
      }
      this.updateSelectedCategory(category);
    } else {
      this.updateSelectedCategory(category);
      this.updateMobileCategoryData(matMenuTrigger);
    }
  }

  setDesktopMenuVisibility(visible: boolean) {
    this.patchState({ isDesktopMenuVisible: visible });
  }

  private updateMobileCategoryData(matMenuTrigger: MatMenuTrigger) {
    matMenuTrigger.menuData = {
      subCategories: this.setupStateValue.selectedCategory.subCategories,
    };
    matMenuTrigger.openMenu();
  }

  private checkIfShouldToggleDesktopVisibility(nextSelectedCategoryName: string) {
    const { selectedCategory, isDesktopMenuVisible } = this.setupStateValue;
    const previousSelectedCategoryName = selectedCategory.categoryName;
    return (
      this.categoryWasChangedWhileMenuWasClosed(
        isDesktopMenuVisible,
        nextSelectedCategoryName,
        previousSelectedCategoryName
      ) ||
      this.theSameCategoryWasSelected(
        previousSelectedCategoryName,
        nextSelectedCategoryName
      ) ||
      this.firstTimeSelectingCategory(previousSelectedCategoryName)
    );
  }

  private categoryWasChangedWhileMenuWasClosed(
    isDesktopMenuVisible: boolean,
    newSelectedCategoryName: string,
    oldSelectedCategoryName: string
  ) {
    return (
      isDesktopMenuVisible === false &&
      oldSelectedCategoryName !== newSelectedCategoryName
    );
  }
  private theSameCategoryWasSelected(
    newSelectedCategoryName: string,
    oldSelectedCategoryName: string
  ) {
    return newSelectedCategoryName === oldSelectedCategoryName;
  }

  private firstTimeSelectingCategory(previousSelectedCategoryName: string) {
    return previousSelectedCategoryName === '';
  }

  private toggleDesktopMenuVisibility() {
    this.patchState({
      isDesktopMenuVisible: !this.setupStateValue.isDesktopMenuVisible,
    });
  }

  toggleMobileMenuVisibility() {
    this.patchState({
      isMobileMenuActive: !this.setupStateValue.isMobileMenuActive,
    });
  }

  constructor() {
    of({ role: 'admin' }).subscribe(user => {
      if (user.role === 'employee') {
        this.patchState({ menuCategories: MENU_CATEGORIES_EMPLOYEE });
      } else if (user.role === 'admin') {
        this.patchState({ menuCategories: MENU_CATEGORIES_ADMIN });
      }
    });
    this.breakpoint$.subscribe(() => {
      const isDesktop = this.breakpointObserver.isMatched('(min-width: 560px)');
      this.patchState({ isDesktop });
      // hide open menu on device change
      if (isDesktop) {
        this.patchState({ isMobileMenuActive: false });
      } else {
        this.patchState({ isDesktopMenuVisible: false });
      }
    });
  }
}
