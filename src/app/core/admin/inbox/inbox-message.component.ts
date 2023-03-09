import { NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Inbox } from './Inbox.interface';

@Component({
  selector: 'app-inbox-message[message]',
  standalone: true,
  template: `
    <div>
      <h2 class="inbox-container__header text-h4">
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
    <div class="inbox-container__icons">
      <button class="btn-rect btn-rect--sm btn-green" (click)="accept(message)">
        Akceptuj
      </button>
      <button class="btn-rect btn-rect--sm btn-red">Odrzuć</button>
    </div>
  `,
  styleUrls: ['inbox-message.component.scss'],
  imports: [MatIconModule, NgClass, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InboxMessageComponent {
  @Input() message!: Inbox;
  @Output() acceptCategory = new EventEmitter<Inbox>();

  accept(message: Inbox) {
    this.acceptCategory.emit(message);
  }
}
