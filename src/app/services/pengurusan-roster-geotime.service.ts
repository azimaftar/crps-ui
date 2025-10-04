import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface LateNoteRequest {
  pegawaiId: string;
}
export interface LateinRequest {
  pegawaiId: string;
  idAtdc: string;
  shcId: string;
  locId: string;
  rCode: string;
  noteText: string;

}
export interface LateinupdateRequest {
  idAtdc: string;
  rCode: string;
  noteText: string;
}
export interface LateinupdatelistRequest {
  idAtdc: string;
  reviewStatus: string;
  reviewBy: string;
}
export interface LateinResponse {
  idAtdc: string;
  shcId: string;
  locId: string;
  rCode: string;
  noteText: string;

}
export interface OTapplyRequest {
  pegawaiId: string;
  otDate: string;
  startTime: string;
  endTime: string;
  reason: string;
  createId?: string;
  updateId?: string;
}
export interface OTapplyResponse {
  idAtdc: string;
  shcId: string;
  locId: string;
  rCode: string;
  noteText: string;

}

export interface LateNoteResponse {
  pegawaiId: string;
  name: string;
  icNo: string;
  gred: string;
  division: string;
  unit: string;
  groupRSTR: string;
  clockInDate: string;
  clockInTime: string;
  locationId: string;
  clockInLate: boolean;
  attendanceId: string;
  reasonCode: string;
  noteText: string;
  message: string;
  scheduleId: string;
  reviewerUid: string;
}

@Injectable({
  providedIn: 'root',
})
export class PengurusanRosterGeotimeService {

  // production true use wso api, false use localhost
  private apiUrl = environment.production
    ? '/bkp-services/v1/BKP'
    : 'http://localhost:8080/BKP';
    
  // private apiPegawaiUrl = 'http://localhost:8080/BKP/getMaklumatCutiADM';
  // private apinotelateUrl = 'http://localhost:8080/BKP/GetMaklumatCatatanLewat';
  // private apiPostNoteUrl = 'http://localhost:8080/BKP/postMaklumatCatatanLewat';
  // private apiPostupdateNoteUrl = 'http://localhost:8080/BKP/postMaklumatLogMasuk';
  // private apiurlpegawailist = 'http://localhost:8080/BKP/getMaklumatCutiADMMultiple';
  // private apiurlkelulusanlatelist = 'http://localhost:8080/BKP/getKelulusanMaklumatCatatanLewat';
  // private apiurlkelulusanlatelistput = 'http://localhost:8080/BKP/putKelulusanCatatanLewat';
  // private apiurlmohonOT = 'http://localhost:8080/BKP/postMaklumatMemohonOT';

  constructor(private http: HttpClient) { }


  getMaklumatPegawaiLewat(request: LateNoteRequest): Observable<LateNoteResponse> {
  const params = new HttpParams().set('pegawaiId', request.pegawaiId);
  return this.http.get<LateNoteResponse>(
    `${this.apiUrl}/getMaklumatCutiADM`, // use base URL here
    { params }
  );
}
postMaklumatCatatanLewat(request: LateinRequest): Observable<string> {
  return this.http.post(`${this.apiUrl}/postMaklumatCatatanLewat`, request, { responseType: 'text' });
}

postMaklumatLogMasuk(request: LateinupdateRequest): Observable<string> {
  return this.http.post(`${this.apiUrl}/postMaklumatLogMasuk`, request, { responseType: 'text' });
}

getMaklumatCatatanLewat(request: LateNoteRequest): Observable<LateNoteResponse> {
  const params = new HttpParams().set('pegawaiId', request.pegawaiId);
  return this.http.get<LateNoteResponse>(`${this.apiUrl}/GetMaklumatCatatanLewat`, { params });
}

getMaklumatCutiADMMultiple(pegawaiId: string): Observable<LateNoteResponse[]> {
  const params = new HttpParams({ fromObject: { pegawaiId } });
  return this.http.get<LateNoteResponse[]>(`${this.apiUrl}/getMaklumatCutiADMMultiple`, { params });
}

getKelulusanMaklumatCatatanLewat(pegawaiIds: string[]): Observable<LateNoteResponse[]> {
  const params = new HttpParams({ fromObject: { pegawaiIds } });
  return this.http.get<LateNoteResponse[]>(`${this.apiUrl}/getKelulusanMaklumatCatatanLewat`, { params });
}

putKelulusanCatatanLewatList(requestList: LateinupdatelistRequest[]): Observable<string> {
  return this.http.post(`${this.apiUrl}/putKelulusanCatatanLewat`, requestList, { responseType: 'text' });
}

postMaklumatMemohonOT(request: OTapplyRequest): Observable<string> {
  return this.http.post(`${this.apiUrl}/postMaklumatMemohonOT`, request, { responseType: 'text' });
}

PostputMaklumatMemohonOT(requestList: OTapplyRequest): Observable<string> {
  return this.http.post(`${this.apiUrl}/PostputMaklumatMemohonOT`, requestList, { responseType: 'text' });
}

// postMaklumatCatatanLewat(request: LateinRequest): Observable<string> {
  //   return this.http.post(this.apiPostNoteUrl, request, { responseType: 'text' });
  // }

  // postMaklumatLogMasuk(request: LateinupdateRequest): Observable<string> {
  //   return this.http.post(this.apiPostupdateNoteUrl, request, { responseType: 'text' });
  // }

  // getMaklumatPegawaiLewat(request: LateNoteRequest): Observable<LateNoteResponse> {
  //   const params = new HttpParams().set('pegawaiId', request.pegawaiId);
  //   return this.http.get<LateNoteResponse>(this.apiPegawaiUrl, { params });
  // }
  
  // getMaklumatCatatanLewat(request: LateNoteRequest): Observable<LateNoteResponse> {
  //   const params = new HttpParams().set('pegawaiId', request.pegawaiId);
  //   return this.http.get<LateNoteResponse>(this.apinotelateUrl, { params });
  // }
  // getMaklumatCutiADMMultiple(pegawaiIds: string[]): Observable<LateNoteResponse[]> {
  //   const params = new HttpParams({ fromObject: { pegawaiIds } });

  //   return this.http.get<LateNoteResponse[]>(this.apiurlpegawailist,
  //     { params }
  //   );
  // }
  // getKelulusanMaklumatCatatanLewat(pegawaiIds: string[]): Observable<LateNoteResponse[]> {
  //   const params = new HttpParams({ fromObject: { pegawaiIds } });

  //   return this.http.get<LateNoteResponse[]>(this.apiurlkelulusanlatelist,
  //     { params }
  //   );
  // }
  // putKelulusanCatatanLewatList(requestList: LateinupdatelistRequest[]): Observable<string> {
  //   return this.http.post(this.apiurlkelulusanlatelistput, requestList, { responseType: 'text' });
  // }
  // postMaklumatMemohonOT(requestList: OTapplyRequest[]): Observable<string> {
  //   return this.http.post(this.apiurlmohonOT, requestList, { responseType: 'text' });
  // }


}
