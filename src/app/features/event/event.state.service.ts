import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ENDPOINTS } from "@shared/contants";

import { Maybe } from "@shared/utility-types";
import { BehaviorSubject } from "rxjs";
import { EventModule } from "./event.module";
import { EventCardDTO, EventDetailsDTO } from "./event.types";

export type EventState = {
  eventDetails: Maybe<EventDetailsDTO>;
  eventsList: EventCardDTO[];
  isLoading: boolean;
};

const eventStateDefault = {
  eventDetails: null,
  eventsList: [],
  isLoading: false,
};

@Injectable({
  providedIn: EventModule,
})
export class EventStateService {
  private $$eventState = new BehaviorSubject<EventState>(eventStateDefault);
  constructor(private http: HttpClient) {}

  get $eventState() {
    return this.$$eventState.asObservable();
  }

  private pathState(stateSlice: Partial<EventState>) {
    this.$$eventState.next({
      ...this.$$eventState.value,
      ...stateSlice,
    });
  }

  getEventDetails(id: number) {
    this.http
      .get<EventDetailsDTO>(`${ENDPOINTS.eventDetails}/${id}`)
      .subscribe(eventDetails => {
        this.pathState({ eventDetails: eventDetails });
      });
  }

  fetchEventList() {
    this.http.get<EventCardDTO[]>(ENDPOINTS.event).subscribe(eventsList => {
      this.pathState({ eventsList: eventsList });
    });
  }
}
