import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from "../../api.config";

@Injectable({
  providedIn: 'root'
})
export class SelanggaraSyakService {
  private apiUrl = apiConfig.apiUrlSec;

  constructor(private http: HttpClient) { }

  getSubjectInfo(kpNo: string, name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getsemakSL`, {
      params: { kpNo, name }
    });
  }
}
