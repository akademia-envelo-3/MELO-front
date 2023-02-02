import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

const iconSizes = ['xs', 'sm', 'md', 'lg'];
type IconSizes = 'sm' | 'md' | 'lg';
type SizeOptions = typeof iconSizes[number];
export type ThemeOptions = 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'app-power-icon',
  templateUrl: 'power-icon.html',
  styleUrls: ['./power-icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerIconComponent implements AfterContentInit {
  fontSize: SizeOptions = 'md';
  @Input() memberNumber = 0;
  @Input() memberLimit?: number;
  @Input() size: IconSizes = 'sm';
  @Input() theme: ThemeOptions = 'primary';

  ngAfterContentInit() {
    this.fontSize = this.calcFontSize();
  }

  get sizeClass() {
    return 'size--' + this.size;
  }

  get themeClass() {
    return 'theme--' + this.theme;
  }

  get textSizeClass() {
    return 'font-text--' + this.fontSize;
  }

  get iconInfinityClass() {
    return 'icon-infinity--' + this.fontSize;
  }
  private calcFontSize() {
    if (this.memberNumber > 99) {
      for (let i = 0; i < iconSizes.length; i++) {
        if (iconSizes[i] === this.size) {
          return iconSizes[i - 1];
        }
      }
    }
    return this.size;
  }
}