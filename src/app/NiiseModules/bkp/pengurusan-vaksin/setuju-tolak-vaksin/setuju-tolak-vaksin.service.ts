import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiConfig} from "../../../../api.config";
// import { apiConfig } from '../../../api.config';

export interface SetujuTolakVaksinDTO {
  id?: string ;
  vaccId: string;
  branchCode: string;
  staffMasterId: string;
  consent: string;
  reason: string;
  recSTS?: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class SetujuTolakVaksinService {
  private apiUrl = apiConfig.apiUrlBkp;
  //private apiUrl = 'http://localhost:8080/BKP/setujuTolak';

  constructor(private http: HttpClient) {}

  getPrefillData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/setujuTolak/dummyData`);
  }

  // hanya untuk testing
  getStaffData(id: string): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/setujuTolak/getMaklumatADM`, {
    params: { id }
  });
}

  //Simpan dokumen
  simpanDokumen(formData: FormData): Observable<any> {
      return this.http.post(`${this.apiUrl}/setujuTolak/postDokumenPermohonan`, formData);
  }

  //Simpan Request
  // simpanRequest(data: SetujuTolakVaksinDTO): Observable<SetujuTolakVaksinDTO> {
  //   return this.http.post<SetujuTolakVaksinDTO>(`${this.apiUrl}/setujuTolak/postMaklumatPermohonan`, data);
  // }

  //Simpan Request
simpanRequest(data: SetujuTolakVaksinDTO): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/setujuTolak/postMaklumatPermohonan`, data);
}

  hantarRequest(id: string): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/setujuTolak/putMaklumatPerakuan/${id}`, {});
}

  // GET permohonan by name
    getRequestByName(name: string): Observable<SetujuTolakVaksinDTO> {
      return this.http.get<SetujuTolakVaksinDTO>(`${this.apiUrl}/setujuTolak/${encodeURIComponent(name)}`);
    }

}
