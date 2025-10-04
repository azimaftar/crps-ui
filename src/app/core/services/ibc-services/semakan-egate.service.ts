import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SemakanEgateService {

  // production true use wso api, false use localhost
  private apiUrl = environment.production ? '/ibc-services/v1/api/v1/ibc' : 'http://localhost:8080/api/v1/ibc';
    // 'https://niiseapis-dev.awanheitech.com/ibc-services/v1/api/v1/ibc';
    //'http://localhost:8080/api/v1/ibc';

  constructor(private http: HttpClient) { }

  //getEgateNo API
  getEgateNoByBranch(branchCode: string): Observable<string[]> {
    const url = `${this.apiUrl}/getNoEgate?n3xitBranch=${encodeURIComponent(branchCode)}`;
    return this.http.get<any>(url);
  }

  // getStatusEgate
  checkStatus(branchCode: string, eGateNo: string, currentDate: string): Observable<any> {
    const url = `${this.apiUrl}/getStatusEgate?`;

    const params = new HttpParams()
      .set('n3xitBranch', branchCode)
      .set('eGateNo', eGateNo)
      .set('currentDate', currentDate);

    return this.http.get<any>(url, { params });
  }

  //getListEgate
  getListEgate(branchCode: string): Observable<any> {
    const url = `${this.apiUrl}/getListEgate?request=${encodeURIComponent(branchCode)}`;
    return this.http.get<any>(url);
  }


  postPalangEgate(body: {
    n3xitBranch: string;
    gateNo: string;
    actionLoc: string;
    loginId: string;
  }) {
    const url = `${this.apiUrl}/postPalangEgate`;
    return this.http.post(url, body);
  }



}
