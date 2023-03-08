import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InboxApiService } from './inbox-api.service';

@Component({
  selector: 'app-inbox',
  template: ` <h1 class="text-h1 header-with-underline">Skrzynka odbiorcza</h1>
    <ng-container *ngIf="inbox$ | async as inbox">
      <div class="bg-gradient-neutral-3 inbox-container">
        <ng-container *ngIf="inbox.length; else inboxEmpty">
          <div *ngFor="let message of inbox" class="text-body-big">
            <div>
              <h2 class="inbox-container__header text-h4">
                <mat-icon>mail_outline</mat-icon>Propozycja kategorii
              </h2>
            </div>
            <p>
              <b>{{ message.requestedBy }}</b> zaproponował/a kategorię
              <b
                [ngClass]="message.inDatabaseAndHidden ? 'error-color' : 'accent-color'"
                >{{ message.categoryName }}</b
              >
              {{ message.inDatabaseAndHidden ? 'która jest ukryta' : '' }}
            </p>
            <div></div></div
        ></ng-container>
        <ng-template #inboxEmpty> </ng-template>
      </div>
    </ng-container>`,
  styleUrls: ['inbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxComponent {
  private inboxApiService = inject(InboxApiService);
  inbox$ = this.inboxApiService.fetchInboxMessages();
}
