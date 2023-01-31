import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-form',
  template: `
    <p>event-form works!</p>
    <app-hashtags></app-hashtags>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormComponent {}
