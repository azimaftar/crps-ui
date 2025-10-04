// src/app/services/pegawai.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the response structure (based on backend spec)
export interface StaffRecord {
  Name: string;
  No_Perkhidmatan: string;
  Email: string;
  Jawatan: string;
  Unit: string;
}

export interface StaffResponse {
  receivedrecord: StaffRecord | null;
  resultErrdsc: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class PegawaiService {
  private baseUrl = '/BKP'; // Base API path, adjust if needed

  constructor(private http: HttpClient) {}

  /**
   * Query staff information from backend by name, service number, and draft ID
   */
  getMaklumatCarianPegawai(
    staffName: string,
    noPerkhidmatan: string,
    noDraf: string
  ): Observable<StaffResponse> {
    // Set headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // Attach query parameters
    const params = new HttpParams()
      .set('Staff_Name', staffName)
      .set('No_Perkhidmatan', noPerkhidmatan)
      .set('No_draf', noDraf);

    // Send GET request
    return this.http.get<StaffResponse>(
      `${this.baseUrl}/getMaklumatCarianPegawai`,
      { headers, params }
    );
  }
}