import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReqMaklumatCarian {
  division_cd: string;
  unit_cd: string;
  group: string;
  Staff_ID?: string;
}

export interface RespMaklumatCarian {
  Staff_ID: string;
  Name: string;
  IC_No: string;
  NOSERV?: string;
  Gred: string;
  Duty_Date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaklumatCarianLokasiService {
  
  private apiUrl = 'http://localhost:8080/BKP';

  constructor(private http: HttpClient) {}

  getMaklumatCarian(filters: ReqMaklumatCarian): Observable<RespMaklumatCarian[]> {
    let params = new HttpParams()
      .set('division_cd', filters.division_cd)
      .set('unit_cd', filters.unit_cd)
      .set('group', filters.group);

    if (filters.Staff_ID) {
      params = params.set('Staff_ID', filters.Staff_ID);
    }

    return this.http.get<RespMaklumatCarian[]>(`${this.apiUrl}/getMaklumatCarianLokasi`, { params });
  }
}