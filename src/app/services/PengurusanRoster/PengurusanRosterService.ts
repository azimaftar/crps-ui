import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MaklumatCarianDaftarJadualResponseDto {
  name: string;
  icNo: string;
  grade: string | null; // Allow null values
  stfMstrUid: string;
  tarikhMulaCuti: Date;
  tarikhAkhirCuti: Date;
}

@Injectable({
  providedIn: 'root'
})
export class PengurusanRosterService {
  
  private apiUrl = 'http://localhost:8080/BKP/getMaklumatCarianDaftarJadual'; // Backend API endpoint

  constructor(private http: HttpClient) {}

  // Method to call the backend API and fetch search results
 searchMaklumatCarian(searchForm: any): Observable<MaklumatCarianDaftarJadualResponseDto[]> {
  return this.http.get<MaklumatCarianDaftarJadualResponseDto[]>(this.apiUrl, {
    params: {
      divisionCode: searchForm.divisionCode || '',
      unitCode: searchForm.unitCode || '',
      icNo: searchForm.icNo || '',
      tarikhMulaRoster: searchForm.tarikhMulaRoster || '',
      tarikhAkhirRoster: searchForm.tarikhAkhirRoster || ''
    }
  });
  }
}
