import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../../../../../api.config';

export interface Unit {
  unitCode: string;
  unitBMDesc: string;
  unitBIDesc: string;
}

export interface Department {
  deptCode: string;
  deptBMDesc: string;
  deptBIDesc: string;
}

export interface State {
  stateCode: string;
  stateZone: string;
  stateBMDesc: string;
  stateBIDesc: string;
}

export interface Agency {
  agencyCode: string;
  agencyBMDesc: string;
  agencyBIDesc: string;
}

export interface ImmRank {
  piRankCode: string;
  piRankBMDesc: string;
  piRankBIDesc: string;
}

@Injectable({ providedIn: 'root' })
export class DropdownService {
  private baseUrl = apiConfig.apiUrlBkp; // Spring Boot backend

  constructor(private http: HttpClient) {}

  getUnits(): Observable<Unit[]> {
    return this.http.get<Unit[]>(`${this.baseUrl}/CMN/R334_UNIT`);
  }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.baseUrl}/CMN/R327_DEPT`);
  }

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.baseUrl}/CMN/R020_STATE`);
  }

  getAgencies(): Observable<Agency[]> {
    return this.http.get<Agency[]>(`${this.baseUrl}/CMN/R027_AGN_ENF`);
  }

  getImmRanks(): Observable<ImmRank[]> {
    return this.http.get<ImmRank[]>(`${this.baseUrl}/CMN/R036_IMM_RNK`);
  }
}
