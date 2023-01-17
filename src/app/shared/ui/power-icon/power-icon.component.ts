import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgClass } from '@angular/common';

const iconFontSizes = {
  sm: '2.4rem',
  md: '3rem',
  lg: '3.6rem',
  xl: '4rem',
};

const memberNumberFontSizes = {
  sm: '1rem',
  md: '1.4rem',
  lg: '1.8rem',
  xl: '3rem',
};
const sizes = ['sm', 'md', 'lg', 'xl'] as const;
type SizeOptions = typeof sizes[number];
type ThemeOptions = 'primary' | 'secondary' | 'teriarty';

@Component({
  selector: 'app-power-icon',
  standalone: true,
  imports: [MatIconModule, NgIf, NgClass],
  templateUrl: 'power-icon.html',
  styleUrls: ['./power-icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PowerIconComponent implements AfterContentInit {
  @ViewChild('members', { static: true })
  membersElement!: ElementRef<HTMLParagraphElement>;
  @ViewChild('limit', { static: true })
  limitElement!: ElementRef<HTMLParagraphElement>;
  @ViewChild('iconInfinity', { static: true })
  iconElement!: ElementRef<HTMLDivElement>;
  @Input() memberNumber = 0;
  @Input() memberLimit?: number;
  @Input() size: SizeOptions = 'md';
  @Input() theme: ThemeOptions = 'primary';

  ngAfterContentInit() {
    const fontSize = this.calcFontSize(this.size);

    this.setMemberViewFontSize(fontSize);

    this.setInifnityIconSize(fontSize);
  }

  get sizeClass() {
    return 'size-' + this.size;
  }

  get themeClass() {
    return 'theme-' + this.theme;
  }
  private calcFontSize(size: SizeOptions) {
    if (this.memberNumber > 99) {
      return sizes.find((size, index, array) => {
        if (size === this.size) {
          array[index - 1];
        }
      }) as SizeOptions;
    }
    return size;
  }
  private setMemberViewFontSize(fontSize: SizeOptions) {
    this.membersElement.nativeElement.style.fontSize = memberNumberFontSizes[fontSize];
    if (this.memberNumber) {
      this.limitElement.nativeElement.style.fontSize = memberNumberFontSizes[fontSize];
    }
  }

  private setInifnityIconSize(fontSize: SizeOptions) {
    if (!this.memberNumber) return;
    this.iconElement.nativeElement.style.fontSize = iconFontSizes[fontSize];
  }
}
