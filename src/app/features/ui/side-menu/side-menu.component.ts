import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgFor, TitleCasePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';

export type SubCategory = {
  subCategoryName: string;
  href: string;
};

export type MenuCategory = {
  categoryName: string;
  categoryIcon: string;
  subCategories: SubCategory[];
};

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    TitleCasePipe,
    NgFor,
    RouterModule,
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent implements OnInit {
  menuCategories: MenuCategory[] = [];

  ngOnInit() {
    of([
      {
        categoryName: 'wydarzenia',
        categoryIcon: '../../../../assets/side-menu-icons/events.svg',
        subCategories: [
          { subCategoryName: 'wszystkie', href: 'events' },
          { subCategoryName: 'moje', href: 'events/my-events' },
          { subCategoryName: 'nowy +', href: 'events/new-event' },
          {
            subCategoryName: 'kategoria +',
            href: 'events/new-category',
            isActive: false,
          },
        ],
      },
      {
        categoryName: 'koła zainteresowań',
        categoryIcon: '../../../../assets/side-menu-icons/units.svg',
        subCategories: [
          { subCategoryName: 'wszystkie', href: 'units' },
          { subCategoryName: 'moje', href: 'units/my-units' },
          { subCategoryName: 'nowy +', href: 'units/new-units' },
        ],
      },
    ]).subscribe(menuCategories => {
      this.menuCategories = menuCategories;
    });
  }
}
