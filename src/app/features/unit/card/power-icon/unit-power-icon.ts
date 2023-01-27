import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

type IconSizes = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-unit-power-icon',
  templateUrl: 'unit-power-icon.html',
  styleUrls: ['./unit-power-icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitPowerIconComponent {
  @Input() memberNumber = 0;
  @Input() size: IconSizes = 'md';

  get sizeClass() {
    return 'size--' + this.size;
  }
}
