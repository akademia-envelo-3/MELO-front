import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

export type UnitCardDTO = {
  unitId: number;
  name: string;
  memberNumber: number;
  description: string;
  mainPhoto: string;
};

@Component({
  selector: 'app-unit-card[card]',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitCardComponent {
  @Input() card!: UnitCardDTO;
  @Input() size: 'sm' | 'md' = 'md';
  @Output() emmitUnitId = new EventEmitter<number>();

  click() {
    this.emmitUnitId.emit(this.card.unitId);
  }
  get cardSize() {
    return `card--${this.size}`;
  }
}
