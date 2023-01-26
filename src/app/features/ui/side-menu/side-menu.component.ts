import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgFor, TitleCasePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

export type SubCategory = {
  subCategoryName: string;
  href: string;
  isActive: boolean;
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
  ],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  private router = inject(Router);
  private ar = inject(ActivatedRoute);

  menuCategories: MenuCategory[] = [
    {
      categoryName: 'wydarzenia',
      categoryIcon: '../../../../assets/side-menu-icons/events.svg',
      subCategories: [
        { subCategoryName: 'wszystkie', href: 'wszystkie', isActive: true },
        { subCategoryName: 'moje', href: 'moje', isActive: false },
        { subCategoryName: 'nowy +', href: 'nowy', isActive: false },
        { subCategoryName: 'kategoria +', href: 'kategoria', isActive: false },
      ],
    },
    {
      categoryName: 'koła zainteresowań',
      categoryIcon: '../../../../assets/side-menu-icons/units.svg',
      subCategories: [
        { subCategoryName: 'wszystkie', href: 'wszystkie', isActive: true },
        { subCategoryName: 'moje', href: 'moje', isActive: false },
        { subCategoryName: 'nowy +', href: 'nowy', isActive: false },
      ],
    },
  ];

  setActiveItem(activeItem: string) {
    console.log(this.router.url);
    console.log(activeItem);
  }
}
