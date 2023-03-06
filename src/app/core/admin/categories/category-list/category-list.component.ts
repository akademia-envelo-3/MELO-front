import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoriesApiService } from '../categories-api.service';

@Component({
  selector: 'app-category-list',
  template: `
    <h1 class="text-h1">Lista kategorii</h1>
    <ng-container *ngIf="categories$ | async as categories; else loading">
      <app-table-items [itemsData]="categories"></app-table-items>
    </ng-container>
    <ng-template #loading
      ><app-spinner-dots class="spinner"></app-spinner-dots
    ></ng-template>
  `,
  styleUrls: ['category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
  categories$ = inject(CategoriesApiService).getAllCategories();
  displayedColumns: string[] = ['no', 'name', 'isVisible', 'edit'];
}
