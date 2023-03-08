import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

import { EventCardDTO, EventApiService } from '..';

type EventCardListState = {
  cardList: EventCardDTO[];
  isLoading: boolean;
};
@Injectable()
export class EventListStateService {
  private eventCardListState$$ = new BehaviorSubject<EventCardListState>({
    cardList: [],
    isLoading: false,
  });

  private eventApiService = inject(EventApiService);

  get eventListState$() {
    return this.eventCardListState$$.asObservable();
  }

  getEventList(amount: number, need: number) {
    this.eventCardListState$$.next({
      ...this.eventCardListState$$.value,
      isLoading: true,
    });

    this.eventApiService
      .fetchEventList(amount, need)
      .pipe(delay(300))
      .subscribe({
        next: cards =>
          this.eventCardListState$$.next({ cardList: cards, isLoading: false }),
        error: error => console.error(error),
      });
  }
}
