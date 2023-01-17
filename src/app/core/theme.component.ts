import { Component } from '@angular/core';
import { SpinnerDotsComponent } from '@shared/index';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [SpinnerDotsComponent],
  template: `
    <h1>Storybook-like route</h1>
    <div>
      <p class="text-h4">Spinner Dots</p>
      <app-spinner-dots size="md"></app-spinner-dots>
    </div>
  `,
})
export default class ThemeComponent {}
