import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


export interface maklumatCutiSemasaRequest {
  stfMstrUid: string;
  year: number;
}

export interface maklumatCutiSemasa {
  jenisCuti: string;
  kelayakanCutiSemasa: number;
  bakiCutiCryfwd: number;
  totalCuti: number;
  bilHari: number;
  bakiCuti: number;
}

@Injectable({ providedIn: 'root' })
export class maklumatCutiSemasaService {
  private apiMaklumatCutiSemasaUrl = environment.production
      ? '/adm-services/v1/ADM'
      : 'http://localhost:8080/ADM';

  constructor(private http: HttpClient) {}

  getMaklumatCutiSemasa(request: maklumatCutiSemasaRequest): Observable<any> {
    return this.http.get<any>(`${this.apiMaklumatCutiSemasaUrl}/getCurLeaveDetail?stfMstr=${request.stfMstrUid}&year=${request.year}`);
  }
}