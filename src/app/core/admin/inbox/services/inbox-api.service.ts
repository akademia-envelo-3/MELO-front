import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@shared/constants';
import { concat, of } from 'rxjs';
import { Inbox } from '../Inbox.interface';

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

  fetchInboxMessages() {
    return this.http.get<Inbox[]>(ENDPOINTS.inbox);
  }

  processRequest(message: Inbox, accepted: boolean) {
    return concat(
      this.addCategoryIfAccepted(message, accepted),
      this.deleteMessageFromInbox(message.id),
      this.addMessageToArchive(message, accepted)
    );
  }

  private addCategoryIfAccepted(message: Inbox, accepted: boolean) {
    return accepted
      ? message.inDatabaseAndHidden
        ? this.patchCategoryVisibility(message)
        : this.addCategory(message)
      : of();
  }
  private addCategory(message: Inbox) {
    return this.http.post<Category>(ENDPOINTS.categories, {
      name: message.categoryName,
      isVisible: true,
    });
  }
  private patchCategoryVisibility(message: Inbox) {
    return this.http.patch<Category>(ENDPOINTS.categories + `/${message.categoryId}`, {
      isVisible: true,
    });
  }

  private deleteMessageFromInbox(messageId: number) {
    return this.http.delete(ENDPOINTS.inbox + `/${messageId}`);
  }
  private addMessageToArchive(message: Inbox, accepted: boolean) {
    return this.http.post(ENDPOINTS.archive, {
      name: message.categoryName,
      accepted: accepted,
      requestedBy: message.requestedBy,
    });
  }
}
