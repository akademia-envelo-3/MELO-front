import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

export type SubCategory = {
  subCategoryName: string;
  href: string;
};

export type MenuCategory = {
  categoryName: string;
  categoryIcon: string;
  href?: string;
  subCategories?: SubCategory[];
};

type SideMenuSetup = {
  menuCategories: MenuCategory[];
};

const defaultSideSetupData = {
  menuCategories: [],
};

@Injectable({
  providedIn: 'root',
})
export class SideMenuStateService {
  private sideMenuSetupState$$ = new BehaviorSubject<SideMenuSetup>(defaultSideSetupData);

  get sideMenuSetupState$() {
    return this.sideMenuSetupState$$.asObservable();
  }

  get sideMenuSetupStateValue() {
    return this.sideMenuSetupState$$.value;
  }

  private patchState(stateSlice: Partial<SideMenuSetup>) {
    this.sideMenuSetupState$$.next({
      ...this.sideMenuSetupStateValue,
      ...stateSlice,
    });
  }

  menuCategoriesEmployee: MenuCategory[] = [
    {
      categoryName: 'wydarzenia',
      categoryIcon: '../../../../assets/side-menu-icons/events.svg',
      subCategories: [
        { subCategoryName: 'wszystkie', href: 'events' },
        { subCategoryName: 'moje', href: 'my-events' },
        { subCategoryName: 'nowy +', href: 'new-event' },
        { subCategoryName: 'kategoria +', href: 'new-category' },
      ],
    },
    {
      categoryName: 'koła zainteresowań',
      categoryIcon: '../../../../assets/side-menu-icons/units.svg',
      subCategories: [
        { subCategoryName: 'wszystkie', href: 'units' },
        { subCategoryName: 'moje', href: 'units/my-units' },
        { subCategoryName: 'nowe +', href: 'units/new-units' },
      ],
    },
  ];

  menuCategoriesAdmin: MenuCategory[] = [
    {
      categoryName: 'wydarzenia',
      categoryIcon: '../../../../assets/side-menu-icons/events.svg',
      href: 'events',
    },
    {
      categoryName: 'koła zainteresowań',
      categoryIcon: '../../../../assets/side-menu-icons/units.svg',
      href: 'units',
    },
    {
      categoryName: 'hashtagi',
      categoryIcon: '../../../../assets/side-menu-icons/hashtags.svg',
      subCategories: [
        { subCategoryName: 'wszystkie', href: 'hashtags' },
        { subCategoryName: 'statystyki', href: 'hashtags/stats' },
      ],
    },
    {
      categoryName: 'kategorie',
      categoryIcon: '../../../../assets/side-menu-icons/categories.svg',
      subCategories: [
        { subCategoryName: 'wszystkie', href: 'categories' },
        { subCategoryName: 'dodaj kategorię', href: 'categories/add-category' },
      ],
    },
  ];

  constructor() {
    of({ role: 'admin' }).subscribe(user => {
      if (user.role === 'employee') {
        this.patchState({ menuCategories: this.menuCategoriesEmployee });
      } else if (user.role === 'admin') {
        this.patchState({ menuCategories: this.menuCategoriesAdmin });
      }
    });
  }
}
