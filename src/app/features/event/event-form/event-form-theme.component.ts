import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-event-form-theme',
  template: `
    <div class="centered">
      <p class="text-h4">Hashtag component</p>
      <app-hashtags></app-hashtags>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        padding-top: 2rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFormThemeComponent {}
