import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import {catchError, throwError} from "rxjs";

export const JwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = new AuthService();
  const token = authService.getToken();

  const modifiedReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(modifiedReq).pipe(
    catchError((error) => {
      console.error('Interceptor Error:', error);
      return throwError(() => new Error(error));
    })
  );
};
