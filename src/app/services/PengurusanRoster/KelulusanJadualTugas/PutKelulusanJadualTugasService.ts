import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PutKelulusanJadualTugasService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  updateKelulusanJadual(data: {
    schedule_id: string;
    Approval_Status: string;
    remarks: string;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/BKP/putKemaskiniJadualLokasi`, data);
  }

  // NEW METHOD: Untuk Hantar (activate schedule)
  activateSchedule(schedule_id: string): Observable<any> {
    return this.http
      .put(`${this.apiUrl}/BKP/activateSchedule`, { schedule_id })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Activate Schedule Error:', error);
          return throwError(error);
        })
      );
  }

  // PutKelulusanJadualTugasService
  bulkUpdateKelulusanJadual(data: {
    schedule_ids: string[];
    Approval_Status: string;
  }): Observable<any> {
    return this.http.put(`${this.apiUrl}/BKP/bulkUpdateKelulusanJadual`, data);
  }
}
