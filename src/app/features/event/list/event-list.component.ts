import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EventCardDTO } from '..';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {
  cardQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
