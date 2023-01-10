import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { catchError, EMPTY, Observable } from "rxjs";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  readonly baseUrl = "http://localhost:3000";

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clone = request.clone({
      url: `${this.baseUrl}${request.url}`,
    });

    return next.handle(clone).pipe(
      catchError(error => {
        return EMPTY;
      })
    );
  }
}
