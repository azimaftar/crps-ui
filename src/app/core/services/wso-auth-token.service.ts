import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of, shareReplay, switchMap, take, timer} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {filter, map, tap} from "rxjs/operators";

@Injectable({ providedIn: 'root'})
export class WsoAuthTokenService {
  private accessToken: string | null = null;
  private expiryTime: number | null = null;
  private refreshing$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}
  fetchAccessToken(): Observable<string> {

    return this.http.get<{access_token: string, expires_in: number, token_type: string}>(
      `/ibc-services/v1/api/v1/ibc/token`
    ).pipe(
      tap({
        next: res => {
          console.log('[TokenService] Full token response:', res);
          if (!res?.access_token) {
            console.error('[TokenService] ❌ No access_token in response!');
          }
          this.accessToken = res.access_token;
          this.expiryTime = Date.now() + res.expires_in * 1000;
        },
        error: err => {
          console.error('[TokenService] ❌ Token request failed:', err);
        }
      }),
      map(res => res?.access_token || '')
    );
  }

  getValidAccessToken(): Observable<string> {
    // return token exist and valid
    if (this.accessToken && this.expiryTime && Date.now() < this.expiryTime) {
      console.log('[TokenService] Returning cached token');
      return of(this.accessToken);
    }
    // fetch new token
    console.log('[TokenService] Fetching new token');
    return this.fetchAccessToken();
  }
}
