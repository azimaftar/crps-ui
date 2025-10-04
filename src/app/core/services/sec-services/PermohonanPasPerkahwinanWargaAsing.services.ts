import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaritalStatus } from '../../models/marital-status.model';
import { DocumentResponse } from '../../models/document-response.model';
import { genderList } from '../../models/marital-status.model';
import { stateList } from '../../models/marital-status.model';
import { ctryList } from '../../models/marital-status.model';
import { jimList } from '../../models/marital-status.model';
import { Religion } from '../../models/marital-status.model';
import { sequenceNumber } from '../../models/marital-status.model';
import {apiConfig} from "../../../api.config";

export interface DocumentItem {
  bil: number;
  keterangan: string;
  fileName: string;
  format: string;
  file?: File | null;
  type?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PermohonanService {
  private formData: any = null;
  private apiUrl = apiConfig.apiUrlSec;

  setFormData(data: any): void {
    this.formData = data;
  }

  getFormData(): any {
    return this.formData;
  }

  clearFormData(): void {
    this.formData = null;
  }

  constructor(private http: HttpClient) {}

  // First API call (already exists)
  getIdentityData(icNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/identity/${icNumber}`);
  }

  // New API call to backend /getSemakUnikID02.1
  getSemakUnikID(
    kpNo: string,
    name: string,
    dob: string,
    nationality: string,
    fid: string
  ): Observable<any> {
    const params = new HttpParams()
      .set('kpNo', kpNo)
      .set('name', name)
      .set('dob', dob)
      .set('nationality', nationality)
      .set('fid', fid);

    return this.http.get<any>(`${this.apiUrl}/getSemakUnikID02.1`, { params });
  }

  getMaritalStatus(): Observable<MaritalStatus[]> {
    return this.http.get<MaritalStatus[]>(`${this.apiUrl}/getMrgSts`);
  }

  getMarriageDocuments(): Observable<DocumentResponse[]> {
    return this.http.get<DocumentResponse[]>(`${this.apiUrl}/getDocsDesc`);
  }

  getSexList(): Observable<genderList[]>{
    return this.http.get<genderList[]>(`${this.apiUrl}/getSexList`);
  }

  getStateList(): Observable<stateList[]>{
    return this.http.get<stateList[]>(`${this.apiUrl}/getState`);
  }

  getApplInfo(noKp: string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/getApplInfo`,{
      params: { t001_kpNo: noKp}
    });
  }

  getJimList(): Observable<jimList[]>{
    return this.http.get<jimList[]>(`${this.apiUrl}/getJimOffice`);
  }

  getReligionList(): Observable<Religion[]>{
    return this.http.get<Religion[]>(`${this.apiUrl}/getReligion`);
  }

  getCountryList(): Observable<ctryList[]>{
    return this.http.get<ctryList[]>(`${this.apiUrl}/ctryList`);
  }

  getsequenceNumber(): Observable<sequenceNumber[]>{
    return this.http.get<sequenceNumber[]>(`${this.apiUrl}/seqCode`);
  }
}
