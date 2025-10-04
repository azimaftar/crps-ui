import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {apiConfig} from "../../api.config";

// ✅ Interface (model)
export interface Permohonan {
  kpNo?: string;
  name?: string;
  docNum?: string;
  dob?: string;
  maritalStatus?: string;
  gender?: string;
  email?: string;
  job?: string;
  age?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  employerName?: string;
  entryDt?: string;
  expiryDt?: string;
  supportDocs?: string;
  attname?: string;
  atttype?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PermohonanService {
  private apiUrl = apiConfig.apiUrlSec; // Express backend

  constructor(private http: HttpClient) {}

  // ✅ File Upload
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  // ✅ Submit new application
  submitAll(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/postDaftarPermohonan2.1`, data);
  }

  // ✅ Fetch all applications
  getAllPermohonan(): Observable<Permohonan[]> {
    return this.http.get<Permohonan[]>(`${this.apiUrl}/submissions`);
  }

  // ✅ Search by date
  searchByDate(date: string): Observable<Permohonan[]> {
    return this.http.get<Permohonan[]>(`${this.apiUrl}/submissions`).pipe(
      map((data) => data.filter((item) => item.entryDt === date))
    );
  }

  // ✅ Search by Notis ID
  searchByIdNotis(id: string): Observable<Permohonan[]> {
    return this.http.get<Permohonan[]>(`${this.apiUrl}/submissions`).pipe(
      map((data) => data.filter((item) => item.docNum?.includes(id)))
    );
  }
}
