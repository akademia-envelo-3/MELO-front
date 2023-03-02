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

  ngOnInit() {
    this.eventListService.getEventList(
      VARIABLES.INITIAL_EVENT_CARDS_NUMBER,
      VARIABLES.INITIAL_EVENT_CARDS_NUMBER
    );
  }

  onScroll() {
    this.currentPage += 1;
    const itemsNeed = VARIABLES.INITIAL_EVENT_CARDS_NUMBER * this.currentPage;
    this.eventListService.getEventList(VARIABLES.INITIAL_EVENT_CARDS_NUMBER, itemsNeed);
  }
}
