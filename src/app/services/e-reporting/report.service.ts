import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../api.config';

export interface VaccineReportModel {

  // For Report 2.5.1 (Accept/Reject)
  vaccName?: string;
  acceptCount?: number;
  rejectCount?: number;

  // For Report 2.5.2 (Details)
  uid?: string;
  dateVacc?: string;
  vaccTaken?: string;
  recSts?: string;
}

export interface VaccReport {
  vaccDate: string;   // from backend
  vaccName: string;
  jumlahTolak: number;
  jumlahTerima: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  // private apiUrl = '/BKP/vaccine-reports'; // Update with your actual API base URL

  private baseUrl = apiConfig.apiUrlBkp;

  constructor(private http: HttpClient) {}

  // /**
  //  * Get vaccine reports based on type
  //  * @param reportType "2.5.1" or "2.5.2"
  //  * @param startDate Start date (YYYY-MM-DD)
  //  * @param endDate End date (YYYY-MM-DD)
  //  */

   // Method to get summary reports from backend
  getVaccinationSummary(): Observable<VaccReport[]> {
    return this.http.get<VaccReport[]>(`${this.baseUrl}/vaccination-summary`);
  }

  getVaccineReports(
    reportType: string,
    startDate: string,
    endDate: string
  ): Observable<VaccineReportModel[]> {
    let params = new HttpParams()
      .set('reportType', reportType);

    if (startDate) {
      params = params.set('startDate', startDate);
    }
    if (endDate) {
      params = params.set('endDate', endDate);
    }

    return this.http.get<VaccineReportModel[]>(this.baseUrl, { params });
  }
}
