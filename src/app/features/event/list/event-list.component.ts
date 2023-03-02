import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { VARIABLES } from '@shared/constants';
import { EventListStateService } from './event-list.state.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EventListStateService],
})
export class EventListComponent implements OnInit {
  currentPage = 1;
  private eventListService = inject(EventListStateService);

  eventList$ = this.eventListService.eventListState$;

  get cardSize() {
    if (window.innerWidth > 400) {
      return 'md';
    }
    return 'sm';
  }

  get initialCardsNumber() {
    if (window.innerWidth > 1730) {
      return VARIABLES.INITIAL_EVENT_CARDS_NUMBER_BIG_SCREEN;
    } else if (window.innerWidth <= 1320) {
      return VARIABLES.INITIAL_EVENT_CARDS_NUMBER_SMALL_SCREEN;
    }
    return VARIABLES.INITIAL_EVENT_CARDS_NUMBER;
  }

  ngOnInit() {
    this.eventListService.getEventList(this.initialCardsNumber, this.initialCardsNumber);
  }

  onScroll() {
    this.currentPage += 1;
    const itemsNeed = this.initialCardsNumber * this.currentPage;
    this.eventListService.getEventList(this.initialCardsNumber, itemsNeed);
  }
}
