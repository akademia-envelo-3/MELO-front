import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hashtag } from './hashtag.interface';

@Injectable({
  providedIn: 'root',
})
export class HashtagApiService {
  private http = inject(HttpClient);

  getHashtags(): Observable<Hashtag[]> {
    return this.http.get<Hashtag[]>('http://localhost:3000/hashtags');
  }
}
