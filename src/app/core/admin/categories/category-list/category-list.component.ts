import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoriesApiService } from '../categories-api.service';

@Component({
  selector: 'app-category-list',
  template: `
    <h1 class="text-h1">Lista kategorii</h1>
    <ng-container *ngIf="categories$ | async as categories">
      <app-table-items [itemsData]="categories"></app-table-items>
    </ng-container>
  `,
  styleUrls: ['category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
  categories$ = inject(CategoriesApiService).getAllCategories();
}
