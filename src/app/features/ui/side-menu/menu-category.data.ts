import { MenuCategory } from './side-menu.state.service';

export const MENU_CATEGORIES_EMPLOYEE: MenuCategory[] = [
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

export const MENU_CATEGORIES_ADMIN: MenuCategory[] = [
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
