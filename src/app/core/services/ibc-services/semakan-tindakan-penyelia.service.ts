import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SemakanTindakanPenyeliaService {
  saveUid(uid: string) {
    throw new Error('Method not implemented.');
  }

  // production true use wso api, false use localhost
  private apiUrl = environment.production ? '/ibc-services/v1/api/v1/ibc' : 'http://localhost:8080/api/v1/ibc';
  // 'https://niiseapis-dev.awanheitech.com/ibc-services/v1/api/v1/ibc';
  //'http://localhost:8080/api/v1/ibc';
  // 'https://niiseapis-dev.awanheitech.com/ibc-services/v1/api/v1/ibc';
  //'http://localhost:8080/api/v1/ibc';

  constructor(private http: HttpClient) { }

  // getListProfilPengembara
  getListProfilPengembara(branchCode: string, currentDate: string, txnCode: string, visitorType: string): Observable<any> {
    const url = `${this.apiUrl}/getListProfilPengembara?`;

    const params = new HttpParams()
      .set('n3xitBranch', branchCode)
      .set('currentDate', currentDate)
      .set('txnCode', txnCode)
      .set('visitorType', visitorType);

    return this.http.get<any>(url, { params });
  }

  //getMaklumatPertanyaaan
  getMaklumatPertanyaanByUid(uid: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getMaklumatPertanyaan/byUid/${uid}`);
  }

  getMaklumatPertanyaanByDetails(visitorType: string, docType: string, docNo: string, kpNo: string): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/getMaklumatPertanyaan/byDetails/${visitorType}/${docType}/${docNo}/${kpNo}`
    );
  }

  //postMaklumatNTL
  postMaklumatNTL(body: {
    uuidRef: string,
    ntlCode: string,
    reasonRemarks: string,
    status: string,
    createId: string,
    createDate: string,
    updateId: string,
    updateDate: string,
    vesselName: string,
    branchCode: string,
    ntlCtgCode: string,
    reason: string
  }) {
    const url = `${this.apiUrl}/postMaklumatNTL`;

    return this.http.post(url, body);
  }

  postMaklumatTindakan(body: {
    uid: string;
    reasonCode: string;
    reasonRemark: string;
    reasonNTL: string;
    spvCurrentLoginId: string;
    currentLoginId: string;
  }) {
    const url = `${this.apiUrl}/postMaklumatTindakan`;
    return this.http.post(url, body);
  }

}
