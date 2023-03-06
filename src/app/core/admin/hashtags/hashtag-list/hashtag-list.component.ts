import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HashtagApiService } from '../hashtag-api.service';

@Component({
  selector: 'app-hashtag-list',
  template: `
    <h1 class="text-h1">Lista hasztagów</h1>
    <ng-container *ngIf="hashtags$ | async as hashtags; else loading">
      <app-table-items [itemsData]="hashtags"></app-table-items>
    </ng-container>
    <ng-template #loading
      ><app-spinner-dots class="spinner"></app-spinner-dots
    ></ng-template>
  `,
  styleUrls: ['hashtag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashtagListComponent {
  hashtags$ = inject(HashtagApiService).getHashtags();
}
