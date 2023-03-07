import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { HashtagApiService } from '../hashtag-api.service';

@Component({
  selector: 'app-hashtag-list',
  template: `
    <h1 class="text-h1">Lista hasztagów</h1>
    <ng-container *ngIf="hashtags$ | async as hashtags">
      <app-table-items [itemsData]="hashtags"></app-table-items>
    </ng-container>
  `,
  styleUrls: ['hashtag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HashtagListComponent {
  hashtags$ = inject(HashtagApiService).getHashtags();
}
