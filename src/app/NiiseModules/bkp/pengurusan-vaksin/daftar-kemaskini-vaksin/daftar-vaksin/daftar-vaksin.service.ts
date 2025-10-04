import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiConfig} from "../../../../../api.config";

export interface CarianVaksinDTO {
  id?: number;
  vaccName: string;
  vaccYear: string;
  expYear: string;     // Format: yyyy-MM-dd
  compName: string;
  totalDose: number;
  quotaDose: number;
  alloPrice: number;
  branchCode: string;
  startDate: string;   // Format: yyyy-MM-dd
  endDate: string;     // Format: yyyy-MM-dd
  remarks: string;
  activeSTS?: number | null;  
}

@Injectable({
  providedIn: 'root'
})
export class DaftarVaksinService {
  private apiUrl = apiConfig.apiUrlBkp; 
  // private branchUrl = 'http://localhost:8080/branch/getBranchImigresen';

  constructor(private http: HttpClient) {}

  //simpan (draft)
simpanVaksin(data: CarianVaksinDTO): Observable<CarianVaksinDTO> {
  return this.http.post<CarianVaksinDTO>(`${this.apiUrl}/postMaklumatPermohonan`, data);
}

 // Hantar (Confirm)
hantarVaksin(vaccName: string, data: CarianVaksinDTO): Observable<any> {
  return this.http.put(`${this.apiUrl}/putMaklumatVaksin/hantar/${vaccName}`, data);
}

  // GET vaksin details by vaccName
  getVaksinByName(vaccName: string): Observable<CarianVaksinDTO> {
    return this.http.get<CarianVaksinDTO>(`${this.apiUrl}/${encodeURIComponent(vaccName)}`);
  }

  // Get Imigresen Branch
  // getBranches(): Observable<CarianVaksinDTO[]> {
  //   return this.http.get<CarianVaksinDTO[]>(this.branchUrl);
  // }

  getBranches(): Observable<CarianVaksinDTO[]> {
    return this.http.get<CarianVaksinDTO[]>(`${this.apiUrl}/branchImigresen`);
  }

}
