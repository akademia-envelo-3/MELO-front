import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-dots',
  standalone: true,
  template: `
    <section
      [style.color]="color"
      [style.height]="proportion"
      [style.width]="proportion"
      class="spinner"
    ></section>
  `,
  styleUrls: ['./spinner-dots.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerDotsComponent {
  private sizes = {
    sm: '0.7rem',
    md: '0.9rem',
    lg: '1.2rem',
  };
  @Input() size: keyof typeof this.sizes = 'sm';
  @Input() color = 'white';
  proportion = this.sizes[this.size];
}
