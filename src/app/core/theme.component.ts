import { Component } from '@angular/core';
import { PowerIconComponent } from '@shared/ui';
import { SpinnerDotsComponent } from '@shared/index';
import { CircularButtonComponent } from '@shared/ui/circular-button/circular-button.component';
import EventModule from '@features/event/event.module';
import { EventCardDTO } from '@features/event';

@Component({
  selector: 'app-theme',
  standalone: true,

  imports: [
    CircularButtonComponent,
    PowerIconComponent,
    SpinnerDotsComponent,
    EventModule,
  ],

  template: `
    <h1>Storybook-like route</h1>
    <div class="circular-buttons-container bg-gradient-neutral-3">
      <p class="text-h4">Spinner Dots</p>
      <app-spinner-dots size="md"></app-spinner-dots>
    </div>
    <div class="circular-buttons-container bg-gradient-neutral-3">
      <p class="text-h4">Circular Buttons</p>
      <div class="circular-buttons-container__btns">
        <div class="circular-buttons-container__btn">
          <p>Small size</p>
          <app-circular-button size="sm" textSize="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium size</p>
          <app-circular-button size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large size</p>
          <app-circular-button size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large</p>
          <app-circular-button size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small done</p>
          <app-circular-button icon="done" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium done</p>
          <app-circular-button icon="done" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large done</p>
          <app-circular-button icon="done" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large done</p>
          <app-circular-button icon="done" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small close</p>
          <app-circular-button icon="close" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium close</p>
          <app-circular-button icon="close" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large close</p>
          <app-circular-button icon="close" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large close</p>
          <app-circular-button icon="close" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small back</p>
          <app-circular-button icon="arrow_back" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium back</p>
          <app-circular-button icon="arrow_back" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large close</p>
          <app-circular-button icon="arrow_back" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large close</p>
          <app-circular-button icon="arrow_back" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small forward</p>
          <app-circular-button icon="arrow_forward" size="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium forward</p>
          <app-circular-button icon="arrow_forward" size="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large forward</p>
          <app-circular-button icon="arrow_forward" size="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large</p>
          <app-circular-button icon="arrow_forward" size="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Small text</p>
          <app-circular-button text="click" size="sm" textSize="sm"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Medium text</p>
          <app-circular-button text="click" size="md" textSize="md"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Large text</p>
          <app-circular-button text="click" size="lg" textSize="lg"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra large text</p>
          <app-circular-button text="click" size="xl" textSize="xl"></app-circular-button>
        </div>
        <div class="circular-buttons-container__btn">
          <p>Extra extra large text</p>
          <app-circular-button text="click" size="xl" textSize="xl"></app-circular-button>
        </div>
      </div>
    </div>

    <div class="rectangular-buttons-container bg-gradient-neutral-3">
      <p class="text-h4">Rectangular Buttons</p>
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

    <div class="cards-wrapper bg-gradient-neutral-3">
      <p class="text-h4">Event Cards</p>
      <div class="cards-wrapper--inner">
        <app-event-card
          [card]="this.cardExample"
          [url]="'../../../../assets/cards/card-purple.png'"
        >
        </app-event-card>
        <app-event-card
          [card]="this.cardExample3"
          [url]="'../../../assets/cards/card-blue.png'"
        >
        </app-event-card>
        <app-event-card
          [card]="this.cardExample2"
          [url]="'../../../../assets/cards/card-white.png'"
        >
        </app-event-card>
        <app-event-card
          size="sm"
          [card]="this.cardExample4"
          [url]="'../../../../assets/cards/card-brown.png'"
        >
        </app-event-card>
        <app-event-card
          size="sm"
          [card]="this.cardExample"
          [url]="'../../../../assets/cards/card-purple.png'"
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
  cardExample2: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 0,
    mainPhoto: 'assets/mock/beers.png',
    theme: 'white',
    memberLimit: undefined,
  };
  cardExample3: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 10,
    mainPhoto: 'assets/mock/beers.png',

    theme: 'blue',
    memberLimit: 99,
  };
  cardExample4: EventCardDTO = {
    eventId: 1,
    name: 'Event Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
    startTime: new Date(),
    invitedMembersNumber: 10,
    mainPhoto: 'assets/mock/beers.png',
    theme: 'brown',
    memberLimit: undefined,
  };
}
