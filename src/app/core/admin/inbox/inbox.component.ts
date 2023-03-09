import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InboxApiService } from './inbox-api.service';
import { Inbox } from './Inbox.interface';

@Component({
  selector: 'app-inbox',
  template: ` <h1 class="text-h1 header-with-underline">Skrzynka odbiorcza</h1>
    <ng-container *ngIf="inbox$ | async as inbox">
      <div class="bg-gradient-neutral-3 inbox-container">
        <ng-container *ngIf="inbox.length; else inboxEmpty">
          <div *ngFor="let message of inbox" class="text-body-big">
            <app-inbox-message
              [message]="message"
              (acceptCategory)="processAcceptCategory($event)"
            ></app-inbox-message></div
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

  processAcceptCategory(message: Inbox) {
    this.inboxApiService.add(message);
  }
}
