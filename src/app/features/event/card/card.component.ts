import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EventCardDTO, Theme } from '..';

type ThemeSource = {
  url: string;
  color: Theme;
};
@Component({
  selector: 'app-event-card[card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() theme: ThemeSource = {
    url: '../../../../assets/cards/card-purple.png',
    color: 'purple',
  };
  @Input() card: EventCardDTO | undefined;
}
