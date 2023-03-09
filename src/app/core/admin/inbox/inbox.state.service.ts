import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';
import { SnackBarService } from '@shared/services/snack-bar.service';
import { concat } from 'rxjs';
import { Inbox } from './Inbox.interface';

export interface Category {
  id: number;
  name: string;
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class InboxApiService {
  private http = inject(HttpClient);
  private snackBarService = inject(SnackBarService);

  fetchInboxMessages() {
    return this.http.get<Inbox[]>(ENDPOINTS.inbox);
  }

  add(message: Inbox) {
    concat(
      this.http.post<Category>(ENDPOINTS.categories, {
        name: message.categoryName,
        isVisible: true,
      }),
      this.http.delete(ENDPOINTS.inbox + `/${message.id}`),
      this.http.post(ENDPOINTS.archive, {
        name: message.categoryName,
        accepted: true,
        requestedBy: message.requestedBy,
      })
    ).subscribe({
      next: () => {
        this.snackBarService.open('Pomyślnie zaakceptowano kategorię', {
          panelClass: ['green-snackbar'],
        });
      },
    });
  }
}
