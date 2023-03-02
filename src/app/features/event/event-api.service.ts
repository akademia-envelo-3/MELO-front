import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';
import { BehaviorSubject, delay } from 'rxjs';

import { EventCardDTO, EventDetailsDTO } from '.';
@Injectable({
  providedIn: 'root',
})
export class EventApiService {
  private eventCardList$$ = new BehaviorSubject<EventCardDTO[]>([]);
  private http = inject(HttpClient);

  get eventCardList$() {
    return this.eventCardList$$.asObservable();
  }

  fetchEventDetails(id: number) {
    return this.http.get<EventDetailsDTO>(`${ENDPOINTS.EVENT}/${id}`);
  }

  fetchEventList(amount: number, need: number) {
    // request url: amount=12&need=24
    // limits sets maximum cards that returns from the request
    this.http
      .get<EventCardDTO[]>(`${ENDPOINTS.EVENT}?_limit=${need}`)
      .pipe(delay(0))
      .subscribe({
        next: cards => this.eventCardList$$.next(cards),
        error: error => console.error(error),
      });
  }
}
