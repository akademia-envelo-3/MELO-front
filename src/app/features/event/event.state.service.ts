import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ENDPOINTS } from "@shared/constants";

import { BehaviorSubject } from "rxjs";
import { Maybe } from "@shared/utility-types";
import { EventModule } from "./event.module";
import { EventCardDTO, EventDetailsDTO } from ".";

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
