import { Component } from '@angular/core';
import { EventCardDTO } from '@features/event';
import EventModule from '@features/event/event.module';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [EventModule],
  template: `
    <h1>Storybook-like route</h1>

    <div class="rectangular-buttons-container">
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
          <button class="btn-rect btn--black">Black</button>
        </div>
        <div>
          <p>Black disabled</p>
          <button class="btn-rect btn--black" disabled>Black</button>
        </div>
        <div>
          <p>Green</p>
          <button class="btn-rect btn--green">Green</button>
        </div>
        <div>
          <p>Green disabled</p>
          <button class="btn-rect btn--green" disabled>Green</button>
        </div>
      </div>
    </div>
    <div>
      <p class="text-h3">Event Cards</p>
      <div class="cards-wrapper">
        <app-event-card
          [card]="this.cardExample"
          [theme]="{ url: '../../../../assets/cards/card-purple.png', color: 'purple' }"
        >
        </app-event-card>
        <app-event-card
          [card]="this.cardExample"
          [theme]="{ url: '../../../assets/cards/card-blue.png', color: 'blue' }"
        >
        </app-event-card>
        <app-event-card
          [card]="this.cardExample"
          [theme]="{ url: '../../../../assets/cards/card-white.png', color: 'white' }"
        >
        </app-event-card>
        <app-event-card
          [card]="this.cardExample"
          [theme]="{
            url: '../../../../assets/cards/card-brown.png',
            color: 'brown'
          }"
        >
        </app-event-card>
      </div>
    </div>
  `,
  styleUrls: ['theme.component.scss'],
})
export default class ThemeComponent {
  cardExample: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 10,
    mainPhoto: 'assets/mock/beers.png',
    theme: 'purple',
    memberLimit: 50,
  };
}
