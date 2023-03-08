import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';
import { Inbox } from './Inbox.interface';

@Injectable({
  providedIn: 'root',
})
export class InboxApiService {
  private http = inject(HttpClient);

  fetchInboxMessages() {
    return this.http.get<Inbox[]>(ENDPOINTS.inbox);
  }
}
