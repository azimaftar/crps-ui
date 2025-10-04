import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../../../../api.config';

@Injectable({
  providedIn: 'root'
})

export class CarianDrafService {

    private apiUrl = apiConfig.apiUrlBkp+'/getMaklumatCarianPegawai'; // backend endpoint

    constructor(private http: HttpClient) {}

    getMaklumatCarianPegawai(s001Name?: string, s001NoServ?: string, n018DocRefNo?: string): Observable<any> {
        let params = new HttpParams();
        if (s001Name) params = params.set('s001Name', s001Name);
        if (s001NoServ) params = params.set('s001NoServ', s001NoServ);
        if (n018DocRefNo) params = params.set('n018DocRefNo', n018DocRefNo);

        return this.http.get<any>(this.apiUrl, { params });
  }
}
