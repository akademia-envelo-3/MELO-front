import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

const iconSizes = ['xs', 'sm', 'md', 'lg'];
type IconSizes = 'sm' | 'md' | 'lg';
type SizeOptions = typeof iconSizes[number];

@Component({
  selector: 'app-unit-power-icon',
  templateUrl: 'unit-power-icon.html',
  styleUrls: ['./unit-power-icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitPowerIconComponent {
  fontSize: SizeOptions = 'md';
  @Input() memberNumber = 0;
  @Input() size: IconSizes = 'md';

  // ngAfterContentInit() {
  //   this.fontSize = this.calcFontSize();
  // }

  get sizeClass() {
    return 'size--' + this.size;
  }

  // private calcFontSize() {
  //   if (this.memberNumber > 99) {
  //     for (let i = 0; i < iconSizes.length; i++) {
  //       if (iconSizes[i] === this.size) {
  //         return iconSizes[i - 1];
  //       }
  //     }
  //   }
  //   return this.size;
  // }
}
