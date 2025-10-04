// src/app/services/kelompok.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KelompokService {
  private baseUrl = '/IBC';

  constructor(private http: HttpClient) {}

  getSenaraiKelompok(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getSenaraiKelompok`);
  }

  postHantarKelompok(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/postHantarKelompok`, data);
  }
}