// takwim.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface TakwimHoliday {
  uuid: number;
  state: string;
  ctry: string;
  date: string;
  holidayType: string | null;
  holidayDetail: string | null;
}


@Injectable({ providedIn: 'root' })
export class TakwimService {
  private baseUrl = environment.production ? '/cmn-services/v1/CMN' : '/CMN';

  constructor(private http: HttpClient) {}

  getHolidays(
    state: string,
    ctry: string,
    month: number,
    year: number
  ): Observable<{ data: TakwimHoliday[] }> {
    const params = {
      state,
      ctry,
      mth: String(month).padStart(2, '0'),
      year: String(year),
    };

    return this.http.get<{ data: TakwimHoliday[] }>(`${this.baseUrl}/getDataTakwim`, { params });
  }

  getTakwimByTarikh(
    date: string,
    state: string,
    ctry: string
  ): Observable<{ data: TakwimHoliday[] }> {
    const params = { date, state, ctry };
    return this.http.get<{ data: TakwimHoliday[] }>(`${this.baseUrl}/getTakwimByTarikh`, { params });
  }

    getMaklumatTakwim(uuid: number): Observable<{ data: TakwimHoliday }> {
  const params = { uuid };
  return this.http.get<{ data: TakwimHoliday }>(`${this.baseUrl}/getMaklumatTakwim`, { params });
}
}
