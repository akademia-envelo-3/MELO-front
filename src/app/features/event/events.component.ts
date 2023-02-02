import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-events',
  template: ` <p>events works!</p> `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {}
