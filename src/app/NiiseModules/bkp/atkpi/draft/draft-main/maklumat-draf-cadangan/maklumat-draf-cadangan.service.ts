import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../../../../../api.config';

@Injectable({
  providedIn: 'root'
})

export class HantarSimpanDrafService {

  private baseUrl = apiConfig.apiUrlBkp; // backend endpoint

  constructor(private http: HttpClient) {}

  // --- POST ---
  postMaklumatDraf(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/postMaklumatDraf`, data);
  }

  // --- PUT ---
  putMaklumatDraf(draftUid: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/putMaklumatDraf/${draftUid}`, data);
  }

  // --- POST ---
  postUploadDokumen(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/postUploadDokumen`, data);
  }
}
