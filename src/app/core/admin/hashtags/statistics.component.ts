import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HashtagApiService } from '.';

@Component({
  selector: 'app-statistics',
  template: `
    <h1 class="text-h1 header-with-underline">Statystyki</h1>
    <div class="statistics-container">
      <ng-container *ngIf="statistics$ | async as element; else loading">
        <div class="table">
          <table mat-table [dataSource]="element" class="">
            <ng-container matColumnDef="no">
              <th mat-header-cell *matHeaderCellDef>No.</th>
              <td mat-cell *matCellDef="let element; let i = index">{{ i + 1 + '.' }}</td>
            </ng-container>

            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Nazwa</th>
              <td mat-cell *matCellDef="let element">{{ element.name }}</td>
            </ng-container>

            <ng-container matColumnDef="quantity">
              <th mat-header-cell *matHeaderCellDef>Liczba użyć</th>
              <td mat-cell *matCellDef="let element">
                {{ element.quantity }}
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
        </div>
      </ng-container>
      <ng-template #loading
        ><app-spinner-dots class="spinner"></app-spinner-dots
      ></ng-template>
    </div>
  `,
  styleUrls: ['statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatisticsComponent {
  statistics$ = inject(HashtagApiService).getHashtags();
  displayedColumns: string[] = ['no', 'name', 'quantity'];
}
