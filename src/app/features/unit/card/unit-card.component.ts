import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

type UnitDTO = {
  name: string;
  description: string;
  unitId: number;
};
@Component({
  selector: 'app-unit-card[]',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitCardComponent {
  @Input() card!: UnitDTO;
  @Output() emmitUnitId = new EventEmitter<number>();

  click() {
    this.emmitUnitId.emit(this.card?.unitId);
  }
}
