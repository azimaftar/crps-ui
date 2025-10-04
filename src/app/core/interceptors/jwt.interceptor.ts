// jwt.interceptor.ts
import { HttpRequest, HttpHandlerFn, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export const JwtInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  let authReq = req;
  const token = localStorage.getItem('token'); // Example token storage
  if (token) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(authReq).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        console.log('Interceptor Response Body:', event.body); // Log the raw body
        // Check if the endpoint is /CMN/ and the body is a string without JSON structure
        if (req.url.includes('/CMN/') && typeof event.body === 'string' && !event.body.trim().startsWith('{') && !event.body.trim().startsWith('[')) {
          console.log('Bypassing JSON parse for /CMN/ endpoint, raw body:', event.body);
          return event.clone({ body: event.body }); // Return raw string
        }
        // For other endpoints or JSON-like responses, parse as JSON
        try {
          const body = event.body ;
          return event.clone({ body });
        } catch (e) {
          console.warn('JSON Parse Error:', e, 'Raw body:', event.body);
          return event; // Return unparsed if JSON fails
        }
      }
      return event;
    }),
    catchError(error => {
      console.error('Interceptor Error:', error, 'Request URL:', req.urlWithParams);
      return throwError(() => error);
    })
  );
};