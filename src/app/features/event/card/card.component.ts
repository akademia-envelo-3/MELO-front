import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() theme = '../../../../assets/cards/card-purple.png';
  @Input() color = 'purple';

  ngOnInit() {
    console.log(this.color);
  }
}
