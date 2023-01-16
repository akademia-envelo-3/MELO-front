import { Component } from '@angular/core';
import EventModule from '@features/event/event.module';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [EventModule],
  template: `
    <h1>Storybook-like route</h1>
    <!-- <div class="rectangular-buttons-container">
      <p class="text-body-big">Rectangular Buttons</p>
      <div class="rectangular-buttons-container__btns">
        <div>
          <p>Default</p>
          <button class="btn-rect btn-default">Default</button>
        </div>
        <div>
          <p>Disabled</p>
          <button class="btn-rect btn-default" disabled>Default</button>
        </div>
        <div>
          <p>Black</p>
          <button class="btn-rect btn-black">Black</button>
        </div>
        <div>
          <p>Black disabled</p>
          <button class="btn-rect btn-black" disabled>Black</button>
        </div>
        <div>
          <p>Green</p>
          <button class="btn-rect btn-green">Green</button>
        </div>
        <div>
          <p>Green disabled</p>
          <button class="btn-rect btn-green" disabled>Green</button>
        </div>
      </div>
    </div> -->
    <div class="temp">
      <app-event-card
        [color]="'purple'"
        [theme]="'../../../../assets/cards/card-purple.png'"
      >
      </app-event-card>
      <app-event-card [color]="'blue'" [theme]="'../../../../assets/cards/card-blue.png'">
      </app-event-card>
      <app-event-card
        [color]="'white'"
        [theme]="'../../../../assets/cards/card-white.png'"
      >
      </app-event-card>
      <app-event-card
        [color]="'brown'"
        [theme]="'../../../../assets/cards/card-brown.png'"
      >
      </app-event-card>
    </div>
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {}
