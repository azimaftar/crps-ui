import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CarianSlRequest {
  kpNo?: string;
  name?: string;
  dob?: string;         // Format: YYYY-MM-DD
  citizenship?: string;
}

export interface CarianSlResponse {
  kpNo: string;
  name: string;
  dob: string;
  citizenship: string;
  fid: string;
  race: string;
  gender: string;
  catatanTambahan: string;
  contactNo: string;
  emailAdd: string;
  docNo: string;
  docType: string;
  add1: string;
  add2: string;
  add3: string;
  postcode: string;
  cityCode: string;
  stateCode: string;
  appRefNo: string;
  appType: string;
  docEndDate: string;
  endDate: string;
  visitStartDate: string;
  appTime: string;
  entMod: string;
  passCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarianSlService {
  private apiCarianUrl = 'http://localhost:8080/SEC/getsemakSL';
  private apiCarianAllUrl = 'http://localhost:8080/SEC/getAllSemakSL';

  constructor(private http: HttpClient) {}

  getCarianAll(request: CarianSlRequest): Observable<CarianSlResponse> {
    return this.http.post<CarianSlResponse>(this.apiCarianAllUrl, request);
  }

  getCarianbysomething(request: CarianSlRequest): Observable<CarianSlResponse> {
    return this.http.post<CarianSlResponse>(this.apiCarianUrl, request);
  }
}
