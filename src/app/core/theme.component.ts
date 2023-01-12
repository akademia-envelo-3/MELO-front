import { Component } from '@angular/core';
import { SpinnerDotsComponent } from '@shared/ui/spinner-dots.component';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [SpinnerDotsComponent],
  template: `
    <h1>Storybook-like route</h1>
    <app-spinner-dots size="md"></app-spinner-dots>
  `,
})
export default class ThemeComponent {}
