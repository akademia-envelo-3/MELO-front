import { MenuCategory } from './side-menu.state.service';

export const MENU_CATEGORIES_EMPLOYEE: MenuCategory[] = [
  {
    categoryName: 'wydarzenia',
    categoryIcon: '../../../../assets/side-menu-icons/events.svg',
    subCategories: [
      { subCategoryName: 'wszystkie', href: 'events' },
      { subCategoryName: 'moje', href: 'my-events-placeholder' },
      { subCategoryName: 'nowe +', href: 'new-event' },
      { subCategoryName: 'kategoria +', href: 'new-event-category-placeholder' },
    ],
  },
  {
    categoryName: 'koła zainteresowań',
    categoryIcon: '../../../../assets/side-menu-icons/units.svg',
    subCategories: [
      { subCategoryName: 'wszystkie', href: 'units' },
      { subCategoryName: 'moje', href: 'my-units-placeholder' },
      { subCategoryName: 'nowe +', href: 'units/new-unit' },
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
      { subCategoryName: 'statystyki', href: 'hashtags-statistics-placeholder' },
    ],
  },
  {
    categoryName: 'kategorie',
    categoryIcon: '../../../../assets/side-menu-icons/categories.png',
    subCategories: [
      { subCategoryName: 'wszystkie', href: 'categories' },
      { subCategoryName: 'dodaj kategorię', href: 'new-category-placeholder' },
    ],
  },
];
