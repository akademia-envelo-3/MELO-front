import { inject, Injectable } from '@angular/core';
import { SnackBarService } from '@shared/services';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { InboxApiService } from './inbox-api.service';
import { Inbox } from '../Inbox.interface';

@Injectable({
  providedIn: 'root',
})
export class InboxStateService {
  private inboxApiService = inject(InboxApiService);
  private snackBarService = inject(SnackBarService);
  private inbox$$ = new BehaviorSubject<Inbox[]>([]);

  get inbox$() {
    return this.inbox$$.asObservable();
  }

  getInbox() {
    this.inboxApiService
      .fetchInboxMessages()
      .pipe(
        tap({
          next: inbox => {
            this.inbox$$.next(inbox);
          },
        })
      )
      .subscribe();
  }

  processRequest(message: Inbox, accepted: boolean) {
    this.inboxApiService
      .processRequest(message, accepted)
      .pipe(
        catchError(error => {
          this.snackBarService.open(
            'Akceptacja kategorii nie powiodła się, spróbuj ponownie później'
          );
          return throwError(() => new Error(error));
        })
      )
      .subscribe(() => {
        this.showConfirmationSnackbar(message.categoryName, accepted);
        this.inbox$$.next(this.inbox$$.value.filter(({ id }) => id !== message.id));
      });
  }

  private showConfirmationSnackbar(categoryName: string, accepted: boolean) {
    accepted
      ? this.snackBarService.open(`Zaakceptowano kategorię o nazwie "${categoryName}"`, {
          panelClass: ['green-snackbar'],
        })
      : this.snackBarService.open(
          `Odrzucono propozycję kategorii o nazwie "${categoryName}"`,
          {
            panelClass: ['green-snackbar'],
          }
        );
  }
}
