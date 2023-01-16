import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';

import { BehaviorSubject } from 'rxjs';
import { Maybe } from '@shared/utility-types';
import { EventCardDTO, EventDetailsDTO } from '.';
import EventModule from './event.module';

export type EventState = {
  eventDetails: Maybe<EventDetailsDTO>;
  eventsList: EventCardDTO[];
};

const eventStateDefault = {
  eventDetails: null,
  eventsList: [],
};

@Injectable({
  providedIn: EventModule,
})
export class EventStateService {
  private eventState$$ = new BehaviorSubject<EventState>(eventStateDefault);
  constructor(private http: HttpClient) {}

  geteventState$$() {
    return this.eventState$$.asObservable();
  }

  private patchState(stateSlice: Partial<EventState>) {
    this.eventState$$.next({
      ...this.eventState$$.value,
      ...stateSlice,
    });
  }

  getEventDetails(id: number) {
    this.http.get<EventDetailsDTO>(`${ENDPOINTS.event}/${id}`).subscribe(eventDetails => {
      this.patchState({ eventDetails: eventDetails });
    });
  }

  fetchEventList() {
    this.http.get<EventCardDTO[]>(ENDPOINTS.event).subscribe(eventsList => {
      this.patchState({ eventsList: eventsList });
    });
  }
}
