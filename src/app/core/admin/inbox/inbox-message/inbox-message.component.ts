import { NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Inbox } from '../Inbox.interface';

@Component({
  selector: 'app-inbox-message[message]',
  template: `
    <div class="message-container">
      <h2 class="message-container__header text-h4">
        <mat-icon>mail_outline</mat-icon>Propozycja kategorii
      </h2>
    </div>
    <p>
      <b>{{ message.requestedBy }}</b> zaproponował/a kategorię
      <b [ngClass]="message.inDatabaseAndHidden ? 'error-color' : 'success-color'">{{
        message.categoryName
      }}</b>
      {{ message.inDatabaseAndHidden ? 'która jest ukryta' : '' }}
    </p>
    <div class="message-container__icons">
      <button class="btn-rect btn-rect--sm btn-green" (click)="emitChoice(message, true)">
        Akceptuj
      </button>
      <button class="btn-rect btn-rect--sm btn-red" (click)="emitChoice(message, false)">
        Odrzuć
      </button>
    </div>
  `,
  styleUrls: ['inbox-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxMessageComponent {
  @Input() message!: Inbox;
  @Output() emitRequestChoice = new EventEmitter<{ message: Inbox; accepted: boolean }>();

  emitChoice(message: Inbox, accepted: boolean) {
    this.emitRequestChoice.emit({ message, accepted });
  }
}
