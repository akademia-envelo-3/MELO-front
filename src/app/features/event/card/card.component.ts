import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EventCardDTO, ThemeOptions } from '..';

@Component({
  selector: 'app-event-card[card]',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input() url = 'assets/cards/card-purple.webp';
  @Input() card!: EventCardDTO;
  @Input() size: 'sm' | 'md' = 'md';
  iconTheme: ThemeOptions = 'primary';
  get cardSize() {
    return `card--${this.size}`;
  }

  get themeColor() {
    return `card--${this.card?.theme}`;
  }

  ngOnInit() {
    switch (this.card?.theme) {
      case 'purple':
        this.iconTheme = 'secondary';
        break;
      case 'blue':
        this.iconTheme = 'tertiary';
        break;
      default:
        this.iconTheme = 'primary';
    }
  }
}
