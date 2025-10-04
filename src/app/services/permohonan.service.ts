import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiConfig} from "../api.config";

@Injectable({
  providedIn: 'root'
})
export class PermohonanService {
  private baseUrl = apiConfig.apiUrlSec;

  // Temporary store for cross-page data
  private applicationData: any = null;
  private uploadedFiles: any[] = [];

  constructor(private http: HttpClient) { }

  // Existing API method
  semakStatusSL(searchCat: string, kpNo: string): Observable<any> {
    const params = new HttpParams()
      .set('searchCat', searchCat)
      .set('kpNo', kpNo);

    return this.http.get(`${this.baseUrl}/SemakStatusSL_5_1`, { params });
  }

  getPendingPermohonan(kpNo: string): Observable<any> {
    const params = new HttpParams()
      .set('kpNo', kpNo)
      .set('searchCat', ''); // if needed, you can pass a real searchCat value

    return this.http.get(`${this.baseUrl}/PendingPermohonan_5_1`, { params });
  }



  // Store form data
  setApplicationData(data: any): void {
    this.applicationData = data;
  }

  // Retrieve form data
  getApplicationData(): any {
    return this.applicationData;
  }

  // Store uploaded files
  setUploadedFiles(files: any[]): void {
    this.uploadedFiles = files;
  }

  // Retrieve uploaded files
  getUploadedFiles(): any[] {
    return this.uploadedFiles;
  }

  // Get combined data
  getAllData(): any {
    return {
      data: this.applicationData,
      files: this.uploadedFiles
    };
  }
}
