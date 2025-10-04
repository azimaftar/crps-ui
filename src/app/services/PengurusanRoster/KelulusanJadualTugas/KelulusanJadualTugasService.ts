import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ReqKelulusanJadualTugas {
  division_cd: string;
  unit_cd: string;
  group: string;
  tarikh?: string; 
}

export interface RespKelulusanJadualTugas {
//   Staff_ID: string;
  Kaunter: string;
  Name: string;
  N001_START_TIME: string; 
  N001_END_TIME: string;   
  NOSERV: string;
  Gred: string;
  approvRoster : string;
  remarks: string;
  schedule_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class KelulusanJadualTugasService {
  private apiUrl = 'http://localhost:8080/BKP';

  constructor(private http: HttpClient) {}

  getMaklumatCarian(filters: ReqKelulusanJadualTugas): Observable<RespKelulusanJadualTugas[]> {
    let params = new HttpParams()
      .set('division_cd', filters.division_cd || '')
      .set('unit_cd', filters.unit_cd || '')
      .set('group', filters.group || '')
      .set('Tarikh', filters.tarikh || '');

    // Add tarikh parameter if provided, ensuring proper format
    if (filters.tarikh) {
      // Validate and format tarikh to yyyy-MM-dd
      const tarikhDate = new Date(filters.tarikh);
      if (!isNaN(tarikhDate.getTime())) {
        const formattedTarikh = tarikhDate.toISOString().split('T')[0]; // Extracts yyyy-MM-dd
        params = params.set('Tarikh', formattedTarikh);
      } else {
        console.warn('Invalid tarikh format, skipping parameter:', filters.tarikh);
        // Optionally, throw an error or handle invalid date
      }
    }

    return this.http.get<RespKelulusanJadualTugas[]>(`${this.apiUrl}/getMaklumatCarianKelulusan`, { params });
  }
}