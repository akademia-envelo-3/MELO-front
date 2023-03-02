import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { VARIABLES } from '@shared/constants';
import { IInfiniteScrollEvent } from 'ngx-infinite-scroll';
import { EventApiService } from '..';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventListComponent {
  currentPage = 1;
  private eventAPiService = inject(EventApiService);

  eventList$ = this.eventAPiService.eventCardList$;

  get cardSize() {
    if (window.innerWidth > 400) {
      return 'md';
    }
    return 'sm';
  }

  ngOnInit() {
    this.eventAPiService.fetchEventList(
      VARIABLES.INITIAL_EVENT_CARDS_NUMBER,
      VARIABLES.INITIAL_EVENT_CARDS_NUMBER
    );
  }

  onScroll(event: IInfiniteScrollEvent) {
    console.log('scrolled', event);
    this.currentPage += 1;
    const itemsNeed = VARIABLES.INITIAL_EVENT_CARDS_NUMBER * this.currentPage;
    this.eventAPiService.fetchEventList(VARIABLES.INITIAL_EVENT_CARDS_NUMBER, itemsNeed);
  }
}
