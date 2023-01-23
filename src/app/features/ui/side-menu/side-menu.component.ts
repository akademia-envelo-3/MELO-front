import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NgFor } from '@angular/common';

export type SubCategory = {
  subCategoryName: string;
  isActive: boolean;
};

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatListModule, NgFor],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  myLinks: SubCategory[] = [
    { subCategoryName: 'wszystkie', isActive: true },
    { subCategoryName: 'moje', isActive: false },
    { subCategoryName: 'nowy +', isActive: false },
    { subCategoryName: 'kategoria +', isActive: false },
  ];
}
