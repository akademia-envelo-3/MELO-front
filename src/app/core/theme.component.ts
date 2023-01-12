import { Component } from '@angular/core';
import { EventModule } from '../features/event/event.module';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [EventModule],
  template: `
    <h1>Storybook-like route</h1>
    <app-event-card> </app-event-card>
  `,
})
export default class ThemeComponent {}
