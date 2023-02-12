import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf, NgClass } from '@angular/common';
import { Hashtag } from './hashtag.interface';
import { HashtagApiService } from './hashtag-api.service';
import { Observable } from 'rxjs';
import { SpinnerDotsComponent } from '@shared/ui';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, AsyncPipe, SpinnerDotsComponent, MatTableModule],
  template: `
    <h1>Statystyki</h1>
    <hr />
    <div class="statistics">
      <div [ngClass]="'statistics__table'">
        <ng-container *ngIf="statistics | async as element; else loading">
          <table mat-table [dataSource]="element" class="stats-tab">
            <ng-container matColumnDef="no">
              <th mat-header-cell *matHeaderCellDef>No.</th>
              <td mat-cell *matCellDef="let element; let i = index">{{ i + 1 + '.' }}</td>
            </ng-container>

            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Nazwa</th>
              <td mat-cell *matCellDef="let element">{{ element.name }}</td>
            </ng-container>

            <ng-container matColumnDef="quantity">
              <div class="table-quantity">
                <th mat-header-cell *matHeaderCellDef>Liczba użyć</th>
                <td mat-cell *matCellDef="let element">
                  {{ element.quantity }}
                </td>
              </div>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
        </ng-container>
        <ng-template #loading
          ><app-spinner-dots class="spinner"></app-spinner-dots
        ></ng-template>
      </div>
    </div>
  `,
  styleUrls: ['statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StatisticsComponent {
  hashtags = inject(HashtagApiService);
  statistics: Observable<Hashtag[]> = this.hashtags.getHashtags();
  displayedColumns: string[] = ['no', 'name', 'quantity'];
}
