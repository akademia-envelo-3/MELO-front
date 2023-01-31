import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgFor, TitleCasePipe, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

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
    NgClass,
    RouterModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  menuCategories: MenuCategory[] = [];
  subCategories: SubCategory[] | undefined = [];
  isDesktopMenuVisible = false;
  selectedCategory = '';

  toggleDesktopMenu(categoryName: string) {
    this.checkIfShouldToggleVisibility(categoryName);
    this.updateCategoryData(categoryName);
  }

  private checkIfShouldToggleVisibility(categoryName: string) {
    if (
      (this.isDesktopMenuVisible === false && categoryName !== this.selectedCategory) ||
      categoryName === this.selectedCategory ||
      this.selectedCategory === ''
    ) {
      this.isDesktopMenuVisible = !this.isDesktopMenuVisible;
    }
  }

  private updateCategoryData(categoryName: string) {
    this.selectedCategory = categoryName;

    if (this.isDesktopMenuVisible) {
      this.subCategories = this.menuCategories.find(
        category => category.categoryName === categoryName
      )?.subCategories;
    }
  }

  logout() {
    return 'Logged out';
  }

  ngOnInit() {
    of([
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
      {
        categoryName: 'hashtagi',
        categoryIcon: '../../../../assets/side-menu-icons/hashtags.svg',
      },
      {
        categoryName: 'kategorie',
        categoryIcon: '../../../../assets/side-menu-icons/categories.svg',
      },
    ]).subscribe(menuCategories => {
      this.menuCategories = menuCategories;
    });
  }
}
