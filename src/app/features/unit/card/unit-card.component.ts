import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

export type UnitCardDTO = {
  unitId: number;
  name: string;
  memberNumber: number;
  description: string;
  mainPhoto: string;
};

const maxLengthToCenterText = 105 as const;

@Component({
  selector: 'app-unit-card[card]',
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitCardComponent implements AfterViewInit {
  @ViewChild('description') descriptionElement!: ElementRef<HTMLDivElement>;
  @Input() card!: UnitCardDTO;
  @Input() size: 'sm' | 'md' = 'md';
  @Output() emmitUnitId = new EventEmitter<number>();

  showMore() {
    this.emmitUnitId.emit(this.card.unitId);
  }
  get cardSize() {
    return `card--${this.size}`;
  }

  ngAfterViewInit() {
    const descriptionLenght = this.card.description.length;
    if (descriptionLenght < maxLengthToCenterText)
      this.descriptionElement.nativeElement.classList.add('center-horizontally');
  }
}
