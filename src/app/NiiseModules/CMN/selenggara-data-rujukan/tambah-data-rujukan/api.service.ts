import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';

export interface PostPermohonanDataRujukanDTO {
  refTbl: string;
  ref: string;      //docCode
  val: Record<string, any>;
  appl?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.production ? '/cmn-services/v1/CMN' : '/CMN';

  constructor(private http: HttpClient) { }

  postTambahDataRujukan(refTable: string, payload: { [key: string]: any }): Observable<any> {
    const url = `${this.baseUrl}/postTambahDataRujukan`;
    const params = new HttpParams().set('refTable', refTable);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, payload, { headers, params }).pipe(
      catchError((error) => {
        console.error('Error posting tambahDataRujukan:', error);
        return throwError(() => error);
      })
    );
  }

  postPermohonanDataRujukan(
    payload: PostPermohonanDataRujukanDTO
  ): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/postPermohonanDataRujukan`,
      payload
    );
  }
}
