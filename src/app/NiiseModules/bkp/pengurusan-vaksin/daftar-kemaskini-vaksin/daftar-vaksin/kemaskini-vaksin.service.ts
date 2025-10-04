import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiConfig} from "../../../../../api.config";

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
}

@Injectable({
  providedIn: 'root'
})
export class KemaskiniVaksinService {
  

  private baseUrl = 'http://localhost:8080/BKP'; //FOR NOW GUNA SEC

  constructor(private http: HttpClient) {}

  // PUT method
  updateVaksin(vaccName: string, data: CarianVaksinDTO): Observable<CarianVaksinDTO> {
    return this.http.put<CarianVaksinDTO>(`${this.baseUrl}/putMaklumatVaksin/${vaccName}`, data);
  }

  // DELETE method for soft delete
  deleteVaksin(vaccName: string): Observable<void> {
  return this.http.put<void>(`${this.baseUrl}/delete/${vaccName}`, {});
}


}
