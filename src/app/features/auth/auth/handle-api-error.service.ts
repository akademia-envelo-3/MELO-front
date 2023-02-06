import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MESSAGES } from '@shared/constants';

import { throwError } from 'rxjs';
import { AuthService } from '..';

@Injectable({
  providedIn: 'root',
})
export class HandleApiErrorService {
  private authService = inject(AuthService);
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else if (error.error === 'jwt expired') {
      this.authService.logout();
      alert(MESSAGES.JWT_EXPIRED);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
