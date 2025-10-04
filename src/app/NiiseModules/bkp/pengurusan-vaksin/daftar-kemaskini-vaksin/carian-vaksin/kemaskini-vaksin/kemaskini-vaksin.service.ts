import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiConfig} from "../../../../../../api.config";

export interface CarianVaksinDTO {
  vaccName?: string;
  vaccYear?: string;
  expYear?: string;
  compName?: string;
  totalDose?: number;
  quotaDose?: number;
  alloPrice?: number;
  branchCode?: string;
  startDate?: string;
  endDate?: string;
  remarks?: string;
  activeSTS?: number | null; 
}

@Injectable({
  providedIn: 'root'
})
export class KemaskiniVaksinService {
  private apiUrl = apiConfig.apiUrlBkp;

  constructor(private http: HttpClient) {}

  // PUT method
  updateVaksin(vaccName: string, data: CarianVaksinDTO): Observable<CarianVaksinDTO> {
    return this.http.put<CarianVaksinDTO>(`${this.apiUrl}/putMaklumatVaksin/${vaccName}`, data);
  }

  // DELETE method for soft delete
  deleteVaksin(vaccName: string): Observable<void> {
  return this.http.put<void>(`${this.apiUrl}/delete/${vaccName}`, {});
}

  // Hantar (Confirm)
  hantarVaksin(vaccName: string, data: CarianVaksinDTO): Observable<any> {
    return this.http.put(`${this.apiUrl}/putMaklumatVaksin/hantar/${vaccName}`, data);
  }

  // Get Imigresen Branch
    getBranches(): Observable<CarianVaksinDTO[]> {
      return this.http.get<CarianVaksinDTO[]>(`${this.apiUrl}/branchImigresen`);
    }


}
