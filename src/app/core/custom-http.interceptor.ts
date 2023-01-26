import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { API_URL } from './env.token';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  private baseUrl = inject(API_URL);
  private cookieService = inject(CookieService);
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
            this.cookieService.set('accessToken', event.body.accessToken);
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
        // add task to handle errors, logout when token expires
        error: error => console.log('from interceptor', error),
      })
    );
  }

  private setAuthHeader(req: HttpRequest<unknown>, url: string) {
    if (this.cookieService.check('accessToken')) {
      return req.clone({
        url,
        headers: req.headers.set(
          'Authorization',
          `Bearer ${this.cookieService.get('accessToken')}`
        ),
      });
    }
    return req.clone({ url });
  }
}
