import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface ReqPenjanaanSuratPertukaran {
  namaPegawai: string;
  nomborPerkhidmatan: string;
}

export interface RespPenjanaanSuratPertukaran {
  namaPegawai: string;
  nomborPerkhidmatan: string;
  gredJawatan: String;
  jawatan: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarianPenjanaanSuratPertukaranService {
  private apiUrl = 'http://localhost:8080/BKP';

  constructor(private http: HttpClient) {}

  getDataSuratPertukaran(
    filters: ReqPenjanaanSuratPertukaran
  ): Observable<RespPenjanaanSuratPertukaran[]> { 
    let params = new HttpParams()
      .set('nama', filters.namaPegawai)
      .set('noPerkhidmatan', filters.nomborPerkhidmatan);

    return this.http.get<RespPenjanaanSuratPertukaran[]>(`${this.apiUrl}/getMaklumatKakitanganADM`, { params })
      .pipe(
        catchError(error => {
          console.error('Error fetching data:', error);
          return throwError(() => new Error('Failed to fetch data from server'));
        })
      );
  }
}
