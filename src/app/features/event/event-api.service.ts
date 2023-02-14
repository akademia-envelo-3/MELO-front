import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';

import { EventCardDTO, EventDetailsDTO } from '.';
@Injectable({
  providedIn: 'root',
})
export class EventApiService {
  private http = inject(HttpClient);

  fetchEventDetails(id: number) {
    return this.http.get<EventDetailsDTO>(`${ENDPOINTS.event}/${id}`);
  }

  fetchEventList() {
    // limits sets maximum cards that returns from the request
    return this.http.get<EventCardDTO[]>(`${ENDPOINTS.event}?_limit=12`);
  }
}
