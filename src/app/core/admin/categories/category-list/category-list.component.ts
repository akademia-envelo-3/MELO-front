import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CategoriesApiService } from '../categories-api.service';

@Component({
  selector: 'app-category-list',
  template: `
    <h1 class="text-h1 header-with-underline">Lista kategorii</h1>
    <div class="add-category-container inner-container">
      <p class="add-category-container__text text-body-big font-semibold">
        Dodaj kategorię <app-circular-button size="sm" icon="add"></app-circular-button>
      </p>
    </div>
    <ng-container *ngIf="categories$ | async as categories">
      <app-table-items [itemsData]="categories"></app-table-items>
    </ng-container>
  `,
  styles: [
    `
      .add-category-container {
        display: flex;
        justify-content: flex-end;
      }
      .add-category-container__text {
        display: inline-flex;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
      }
    `,
  ],
  providers: [CategoriesApiService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListComponent {
  categories$ = inject(CategoriesApiService).getAllCategories();
}
