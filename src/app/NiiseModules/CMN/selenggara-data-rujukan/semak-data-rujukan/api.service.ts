import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from '../../../../../environments/environment';

// export interface ApiResponse {
//   cd: string;
//   tbl: string;
//   refTbl: string;
//   ref: string;
//   appl: string;
//   res: string;
//   note: string;
//   bmDesc: string | null;
//   val?: {
//     docBmDesc?: string;
//     docBiDesc?: string;
//     [key: string]: any;
//   };
//   json: string;
//   sts: string;
//   createId: string;
//   createDate: string;
//   updateId: string | null;
//   updateDate: string | null;
// }

export interface ApiResponse {
  uid: string;
  cd: string;
  refTbl: string;
  ref: string;
  bmDesc?: string;
  appl: string;
  res: string | null;
  note: string | null;
  val: any | null;
  sts: string;
}

export interface SenaraiSemakResponse {
  data: ApiResponse[];
  message: string;
  status: string;
}

export interface SemakanDataResponse {
  cd: string;
  refTbl: string;
  ref: string;
  appl: string;
  res: string | null;
  note: string | null;
  json: string | null;
  sts: string;
  createId: string;
  createDate: string;
  updateId: string | null;
  updateDate: string | null;
  bmDesc?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.production ? '/cmn-services/v1/CMN' : '/CMN';

  constructor(private http: HttpClient) {}

  // getSenaraiSemakDataRujukan(): Observable<ApiResponse[]> {
  //   return this.http.get<ApiResponse[]>(`${this.apiUrl}/getSenaraiSemakDataRujukan`);
  // }

  getSenaraiSemakDataRujukan(): Observable<ApiResponse[]> {
    return this.http.get<SenaraiSemakResponse>(`${this.apiUrl}/getSenaraiSemakDataRujukan?actStt=0`)
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.error('API Error:', error);
          return of([]);
        })
      );
  }

  // getSemakanDataRujukan(id: string): Observable<ApiResponse> {
  //   return this.http.get<ApiResponse>(`${this.apiUrl}/getSemakanDataRujukan?id=${id}`);
  // }

  getSemakanDataRujukan(uid: string): Observable<SemakanDataResponse> {
    return this.http
      .get<{ data: SemakanDataResponse; message: string; status: string }>(
        `${this.apiUrl}/getSemakanDataRujukan?uid=${uid}`
      )
      .pipe(
        map(response => response.data),
        catchError(error => {
          console.error('API Error:', error);
          throw error;
        })
      );
  }

  putKeputusanSemakan(uid: string, data: { res: string; note: string }): Observable<any> {
    return this.http.put<{data: any; message: string; status: string}>(
      `${this.apiUrl}/putKeputusanSemakan/${uid}`, 
      data
    ).pipe(
      map(response => response.data)
    );
  }

  putKemasKiniDataRujukan(table: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/putKemasKiniDataRujukan/${table}`, data);
  }
}