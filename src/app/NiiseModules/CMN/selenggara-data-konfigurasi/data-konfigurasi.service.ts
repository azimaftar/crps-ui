import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface ConfigRecord {
  uid: number;
  appCode: string;
  codeTbl: string;
  data: string;
  desc: string;
  val: string;
  applType: string;
}

export interface Q006Conf {
  cd: string;
  data: string;
  desc: string;
  val: string;
  sts: string;
  createId: string;
  createDate: string;
  updateId: string;
  updateDate: string;
}

export interface SemakanDataKonfigurasiDTO {
  uid: number;
  appCode: string;
  codeTbl: string;
  data: string;
  desc: string;
  val: string;
  result: string;
  note: string;
}

export interface KeputusanSemakanDTO {
  result: string;
  note: string;
  updateId: string;
}

export interface dataKonfigurasiByCarian{
  cd: string;
  data: string;
  desc: string;
  val: string;
  sts: string;
}

export interface KemaskiniDataKonfigurasiDTO {
  code: string;
  data: string;
  desc: string;
  val: string;
  loginId: string;
}

export interface StatusDataKonfigurasiDTO {
  code: string;
  status: "0" | "1";
  loginId: string;
}

export interface PostPermohonanDataKonfigurasiDTO {
  conf: string;
  ref: string;
  appl?: string; 
  val: {
    cd: string;
    data: string;
    desc: string;
    val: string;
  };
}

export interface PostTambahDataKonfigurasi {
  uid?: number | null;
  code: string;
  data: string;
  desc: string;
  val: string;
  status: string;
  loginId?: number | null;
}

export interface PostPermohonanActivationKonfigurasiDTO {
  conf: string;
  ref: string;
  appl?: string; 
  val: {
    cd: string;
    data: string;
    desc: string;
    val: string;
    sts: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class DataKonfigurasiService {
  private apiUrl = environment.production ? '/cmn-services/v1/CMN' : '/CMN';

  constructor(private http: HttpClient) { }

  getSenaraiSemakDataKonfigurasi(actsts: string = '1'): Observable<{ data: ConfigRecord[] }> {
    return this.http.get<{ data: ConfigRecord[] }>(
      `${this.apiUrl}/getSenaraiSemakDataKonfigurasi?actsts=${actsts}`
    );
  }

  getDataKonfigurasi(): Observable<Q006Conf[]> {
    return this.http.get<Q006Conf[]>(`${this.apiUrl}/getDataKonfigurasi`);
  }

  getSemakanDataKonfigurasi(uid: number): Observable<SemakanDataKonfigurasiDTO> {
    return this.http
      .get<{ data: SemakanDataKonfigurasiDTO }>(`${this.apiUrl}/getSemakanDataKonfigurasi?uid=${uid}`)
      .pipe(map(response => response.data));
  }

  getDataKonfigurasiByCarian(code: string): Observable<dataKonfigurasiByCarian[]> {
    return this.http.get<dataKonfigurasiByCarian[]>(`${this.apiUrl}/getDataKonfigurasiByCarian`, {
      params: { code }
    });
  }

  putKeputusanSemakanKonfigurasi(uid: number, payload: KeputusanSemakanDTO): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/putKeputusanSemakanKonfigurasi/${uid}`,
      payload
    );
  }

  putKemaskiniDataKonfigurasi(payload: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/putKemaskiniDataKonfigurasi`,
      payload
    );
  }

  putStatusDataKonfigurasi(payload: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/putStatusDataKonfigurasi`,
      payload
    );
  }

  postPermohonanDataKonfigurasi(
    payload: PostPermohonanDataKonfigurasiDTO
  ): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/postPermohonanDataKonfigurasi`,
      payload
    );
  }

  postActivationPermohonanDataKonfigurasi(
    payload: PostPermohonanActivationKonfigurasiDTO
  ): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/postPermohonanDataKonfigurasi`,
      payload
    );
  }

  postTambahDataKonfigurasi(
    payload: PostTambahDataKonfigurasi
  ): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/postTambahDataKonfigurasi`,
      payload
    );
  }
}
