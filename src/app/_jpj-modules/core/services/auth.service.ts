import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse}  from "../models/AuthResponse";
import {API_CONFIG} from "../../../../config/apiConfig";
import {SessionUtil} from "../utils/SessionUtil";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private apiUrl = `${API_CONFIG.baseUrl}/auth`;
  private http = inject(HttpClient);

  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    let obAuth: Observable<AuthResponse>;

    obAuth = this.http.post<AuthResponse>(API_CONFIG.auth.login, credentials).pipe(
      tap((res) => {
        if (res && res.token) {
          SessionUtil.setItem('jwtToken', res.token);
        }
        else{
          throw new Error('Invalid credentials');
        }
      })
    );

    return obAuth;
  }


  logout(): void {
    SessionUtil.removeItem('jwtToken');
    // localStorage.removeItem('jwtToken');
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
