import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = environment.apiIdmBaseUrl;
  private logoutTimer: any;
  private countdownInterval: any;

  // nak track token expiry for auto-logout
  sessionExpiring = new BehaviorSubject<number | null>(null);

  constructor(private http: HttpClient) {
    this.restoreSession();
   }

  redirectToLogin() {
    window.location.href = `${this.baseUrl}/login`;
  }

  exchangeCode(code: string, state: string) {
    sessionStorage.setItem('auth_code', code);
    sessionStorage.setItem('auth_state', state);
    return this.http.post<any>(
      `${this.baseUrl}/callback?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`,
      {}
    );
  }

  getLoginResponse(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/response`, { withCredentials: true });
  }

  logout(): void {
    const tokenRaw = sessionStorage.getItem('authToken');
    let idToken = '';

    if (tokenRaw) {
      try {
        const tokens = JSON.parse(tokenRaw);
        idToken = tokens?.id_token || '';
      } catch (e) {
        console.warn("Failed to parse authTokens from storage", e);
        return;
      }
    }

    if (!idToken) {
      console.warn("No idToken found, cannot logout.");
      return;
    }

    window.location.href = `${this.baseUrl}/logout?idToken=${encodeURIComponent(idToken)}`;

    // Clear both tokens & user info
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('authUser');
  }


  setSession(authData: any) {
    const tokens = authData?.data?.tokens || {};
    const userInfo = authData?.data?.userInfo || {};
    const expiresIn = tokens?.expires_in || 0;
    const expiryTime = Date.now() + expiresIn * 1000;

    // Save tokens with expiry
    const tokenSession = {
      ...tokens,
      expiry: expiryTime
    };
    sessionStorage.setItem('authToken', JSON.stringify(tokenSession));

    // Save user info separately
    sessionStorage.setItem('authUser', JSON.stringify(userInfo));

    this.startLogoutTimer(expiresIn * 1000);
  }

  refreshToken(): Observable<any> {
    const tokenRaw = sessionStorage.getItem('authToken');
    if (!tokenRaw) {
      console.warn(' No tokens in storage, cannot refresh');
      return new Observable(observer => observer.error('No refresh token found'));
    }

    const token = JSON.parse(tokenRaw);
    const refreshToken = token?.refresh_token;

    if (!refreshToken) {
      console.warn(' No refresh token available');
      return new Observable(observer => observer.error('No refresh token found'));
    }

    console.log('🔎 Current token before refresh:', token);

    return this.http.post<any>(
      `${this.baseUrl}/refresh?refreshToken=${encodeURIComponent(refreshToken)}`,
      {} // body is empty since backend reads from @RequestParam
    ).pipe(
      tap(res => {
        if (res?.data) {
          console.log(' Refresh successful:', res);

          const oldTokens = JSON.parse(sessionStorage.getItem('authToken') || '{}');
          const newTokens = res.data;
          const expiresIn = newTokens?.expires_in || 0;
          const expiryTime = Date.now() + expiresIn * 1000;

          // mapping kalau ada update, kalau takde guna yang lama
          const tokenSession = {
            access_token: newTokens.access_token || oldTokens.access_token,
            refresh_token: newTokens.refresh_token || oldTokens.refresh_token,
            id_token: newTokens.id_token || oldTokens.id_token,
            scope: newTokens.scope || oldTokens.scope,
            token_type: newTokens.token_type || oldTokens.token_type,
            expiry: expiryTime
          };

          console.log('🔎 New token after refresh:', tokenSession);

          sessionStorage.setItem('authToken', JSON.stringify(tokenSession));
          this.startLogoutTimer(expiresIn * 1000);
        }
      })
    );
  }

  isAuthenticated(): boolean {
    const tokenRaw = sessionStorage.getItem('authToken');
    if (!tokenRaw) return false;

    try {
      const tokens = JSON.parse(tokenRaw);
      return tokens.expiry && Date.now() < tokens.expiry;
    } catch {
      return false;
    }
  }

  private startLogoutTimer(duration: number) {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.logoutTimer = setTimeout(() => {
      this.logout();
    }, duration);

    const endTime = Date.now() + duration;

    this.countdownInterval = setInterval(() => {
      const remaining = endTime - Date.now();

      if (remaining <= 0) {
        clearInterval(this.countdownInterval);
      } else {
        const seconds = Math.floor(remaining / 1000);
        console.log(`Session will expire in ${seconds}s`);

        if (seconds <= 20) {
          this.sessionExpiring.next(seconds);
        }
      }
    }, 1000);
  }

  private restoreSession() {
    const tokenRaw = sessionStorage.getItem('authToken');
    if (!tokenRaw) return;

    try {
      const tokens = JSON.parse(tokenRaw);
      if (tokens.expiry && Date.now() < tokens.expiry) {
        const remaining = tokens.expiry - Date.now();
        this.startLogoutTimer(remaining);
      } else {
        sessionStorage.removeItem('authToken');
        sessionStorage.removeItem('authUser');
      }
    } catch (e) {
      console.warn("Failed to parse authToken on restore", e);
    }
  }
}
