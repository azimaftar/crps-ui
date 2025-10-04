import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReqSettingPaparanMasaJadual {
  divisionCd: string;
  unitCd: string;
  groupCd: string;
  month: number;
  year: number;
}

export interface RespSettingPaparanMasaJadual {
  Name: string;
  NoPerkhidmatan: string;
  Gred_CD: string;
  N003DutyDate: string;
  ctrName: string;
  userUid: string;
  startTime: string;
  endTime: string;
  remarks: string;
  post: string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingPaparanMasaJadualService {
  private apiUrl = 'http://localhost:8080/BKP';

  constructor(private http: HttpClient) { }

  getPaparanMasaJadual(params: ReqSettingPaparanMasaJadual): Observable<RespSettingPaparanMasaJadual[]> {
    const httpParams = new HttpParams()
      .set('divisionCd', params.divisionCd)
      .set('unitCd', params.unitCd)
      .set('groupCd', params.groupCd)
      .set('month', params.month.toString())
      .set('year', params.year.toString());

   return this.http.get<RespSettingPaparanMasaJadual[]>(`${this.apiUrl}/getPaparanMasaJadual`, { params: httpParams });
  }
}