import {inject} from "@angular/core";
import {WsoAuthTokenService} from "../services/wso-auth-token.service";
import {Observable, switchMap} from "rxjs";
import {HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest} from "@angular/common/http";
import {environment} from "../../../environments/environment";

export const WsoAuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const wsoAuthTokenService = inject(WsoAuthTokenService);

  if (req.url.includes(`/ibc-services/v1/api/v1/ibc/token`)) {
    if (!environment.production) {
      console.log('[Interceptor] Skipping token request:', req.url);
    }
    return next(req);
  }

  if (environment.production) {
    // Always fetch a new token before sending the request
    return wsoAuthTokenService.getValidAccessToken().pipe(
      switchMap(token => {
        console.log('[WsoAuthInterceptor] Got token from fetch:', token || 'NO TOKEN');
        const authReq = token
          ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
          : req;
        return next(authReq);
      })
    );
  } else {
    // ✅ Development: Skip token, pass through request
    console.log('[Interceptor][DEV] Passing request without token:', req.url);
    return next(req);
  }
}
