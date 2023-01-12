import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
