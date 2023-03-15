import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENDPOINTS } from '@shared/constants';
import { Hashtag } from '.';

@Injectable({
  providedIn: 'root',
})
export class HashtagApiService {
  private http = inject(HttpClient);

  getHashtags(): Observable<Hashtag[]> {
    return this.http.get<Hashtag[]>(ENDPOINTS.HASHTAGS);
  }
}
