import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

interface ResponseNotification {
  message: string;
  status: number;
}

@Injectable({
  providedIn: 'root'
})
export class MesejNotifikasiService {
 private baseUrl = environment.production ? '/cmn-services/v1/CMN' : '/CMN';

  constructor(private http: HttpClient) {}

  getMessageTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getMesejType`);
  }

    getMessageError(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getMesejError`);
  }

  getAllMessages(params?: { codeMsg?: string; typeMsg?: string }): Observable<any> {
    let httpParams = new HttpParams();
    if (params?.codeMsg) httpParams = httpParams.set('codeMsg', params.codeMsg);
    if (params?.typeMsg) httpParams = httpParams.set('typeMsg', params.typeMsg);
    return this.http.get<any>(`${this.baseUrl}/getMesejNotifikasi`, { params: httpParams });
  }

  createMessage(data: any): Observable<ResponseNotification> {
    return this.http.post<ResponseNotification>(`${this.baseUrl}/postTambahMesejNotifikasi`, data);
  }

  updateMessage(uidCode: string, data: any): Observable<ResponseNotification> {
    return this.http.put<ResponseNotification>(`${this.baseUrl}/putKemasKiniMesejNotifikasi/${uidCode}`, data);
  }

  updateStatus(uidCode: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/putStatusMesejNotifikasi/${uidCode}`, data);
  }
}
