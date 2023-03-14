import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-spinner-dots',
  standalone: true,
  template: `
    <section
      [style.background-color]="color"
      [style.height]="proportion"
      [style.width]="proportion"
      class="spinner"
    ></section>
  `,
  styleUrls: ['./spinner-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerDotsComponent implements OnChanges {
  private sizeOptions = {
    xs: '0.5rem',
    sm: '0.7rem',
    md: '0.9rem',
    lg: '1.2rem',
  };
  @Input() size: keyof typeof this.sizeOptions = 'sm';
  @Input() color = 'white';
  proportion = '0.9rem';

  ngOnChanges() {
    this.proportion = this.sizeOptions[this.size];
  }
}
