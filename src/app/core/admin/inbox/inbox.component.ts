import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Inbox } from './Inbox.interface';
import { InboxStateService } from './services/inbox.state.service';

@Component({
  selector: 'app-inbox',
  template: ` <h1 class="text-h1 header-with-underline">Skrzynka odbiorcza</h1>
    <ng-container *ngIf="inbox$ | async as inbox">
      <div>
        <a class="font-semibold text-body-big link-with-icon">
          PRZEJDŹ DO ARCHIWUM<mat-icon>arrow_right_alt</mat-icon></a
        >
      </div>
      <div class="bg-gradient-neutral-3 inbox-container">
        <ng-container *ngIf="inbox.length > 0; else inboxEmpty">
          <div *ngFor="let message of inbox" class="text-body-big">
            <app-inbox-message
              [message]="message"
              (emitRequestChoice)="
                processCategoryRequest($event.message, $event.accepted)
              "
            ></app-inbox-message></div
        ></ng-container>
        <ng-template #inboxEmpty
          ><p class="inbox-empty-text text-body-big">Brak propozycji kategorii</p>
        </ng-template>
      </div>
    </ng-container>`,
  styleUrls: ['inbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxComponent implements OnInit {
  private inboxStateService = inject(InboxStateService);
  inbox$ = this.inboxStateService.inbox$;

  ngOnInit() {
    this.inboxStateService.getInbox();
  }

  processCategoryRequest(message: Inbox, accepted: boolean) {
    this.inboxStateService.processRequest(message, accepted);
  }
}
