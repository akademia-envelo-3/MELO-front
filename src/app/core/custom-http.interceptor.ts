import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { catchError, EMPTY, map, Observable, tap } from 'rxjs';
import { API_URL } from './env.token';
import { StorageService } from '@shared/services';
import { HandleApiErrorService } from '@features/auth';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  private baseUrl = inject(API_URL);
  private storageService = inject(StorageService);
  private handleApiError = inject(HandleApiErrorService);
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const url = `${this.baseUrl}${request.url}`;

    const modifiedReq = this.setAuthHeader(request, url);

    return next.handle(modifiedReq).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          if (event.body.accessToken) {
            this.storageService.setToStorage(
              'accessToken',
              event.body.accessToken,
              localStorage
            );
          }
          return new HttpResponse({
            body: event.body,
            headers: event.headers,
          });
        }
        return event;
      }),
      tap({
        next: event => event,

    return next.handle(clone).pipe(
      catchError(() => {
        return throwError(
          () => new Error('Coś poszło nie tak, spróbuj ponownie później')
        );
      })
    );
  }

  private setAuthHeader(req: HttpRequest<unknown>, url: string) {
    const token = this.storageService.getValueFromStorage('accessToken', localStorage);
    if (token) {
      return req.clone({
        url,
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    return req.clone({ url });
  }
}
