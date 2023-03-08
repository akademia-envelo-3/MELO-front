import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';

import { EventCardDTO, EventDetailsDTO } from '.';

@Injectable()
export class EventApiService {
  private http = inject(HttpClient);

  fetchEventDetails(id: number) {
    return this.http.get<EventDetailsDTO>(`${ENDPOINTS.EVENT}/${id}`);
  }

  fetchEventList(amount: number, need: number) {
    // request query: amount=12&need=24
    // limits sets maximum cards that returns from the request
    return this.http.get<EventCardDTO[]>(`${ENDPOINTS.EVENT}?_limit=${need}`);
  }
}
