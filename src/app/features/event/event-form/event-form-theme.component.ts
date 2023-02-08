import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-events-theme',
  template: `
    <div class="component-container centered bg-gradient-neutral-3">
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
      .component-container {
        padding: 1rem;
        border-radius: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsThemeComponent {}
