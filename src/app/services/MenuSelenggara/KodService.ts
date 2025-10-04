import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiConfig} from "../../api.config";

@Injectable({
  providedIn: 'root'
})
export class KodService {
  private baseUrl = apiConfig.apiUrlSec;

  constructor(private http: HttpClient) {}

  /**
   * Save Kod (generic)
   */
  saveKod(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/selenggaraKod`, payload, {
      responseType: 'text'
    });
  }

  /**
   * Get Kod Tindakan (R024)
   */
  getKodTindakan(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/selenggaraKod/r024`);
  }

  /**
   * Get Kod TCO (R025)
   */
  getKodTco(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/selenggaraKod/r025`);
  }

  /**
   * Get Kod NAP (R026)
   */
  getKodNap(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/selenggaraKod/r026`);
  }

  /**
   * Update Kod NAP
   */
  updateKodNap(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/selenggaraKod/updateKodNap`, payload, {
      responseType: 'text'
    });
  }

  /**
   * Update Kod TINDAKAN
   */
  updateKodTindakan(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/selenggaraKod/updateKodTindakan`, payload, {
      responseType: 'text'
    });
  }

  /**
   * Update Kod TCO
   */
  updateKodTco(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/selenggaraKod/updateKodTco`, payload, {
      responseType: 'text'
    });
  }
}
