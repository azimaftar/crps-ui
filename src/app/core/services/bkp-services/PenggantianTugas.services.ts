import { Time, WeekDay } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";

export interface SenaraiMaklumatGantian {
  id: number;
  namapegawai: string;
  nokp: string;
  gred: string;
  bahagian: string;
  unit: string;
  kumpulan: string;
  pegawaicatatan: string;
  catatantarikh: string;
  catatanmasa: string;
  kelulusan: boolean;
}

export interface MaklumatPemohon {
  id: number;
  namapegawai: string;
  nokp: string;
  gred: string;
  bahagian: string;
  unit: string;
  kumpulan: string;
  tarikhtugas: Date;
  haritugas: WeekDay;
  masatugas: Time;
  lokasitugas: boolean;
}

export interface SenaraiGantianPemohon {
  id: Number;
  namapegawai: string;
  nokp: string;
  gred: string;
  bahagian: string;
  unit: string;
  kumpulan: string;
}

export interface RequestPenggantiPemohon {
  stfMstrUid : number;
}

@Injectable({
  providedIn: 'root'
})
export class PenggantianTugasServices {

  private apiUrlBKP = environment.production ? '/bkp-services/v1/BKP' : 'http://localhost:8080/BKP';

  constructor(private http: HttpClient) {}

  getSenaraiPermohonanGantian(): Observable<SenaraiMaklumatGantian[]> {
    return this.http.get<any[]>(`${this.apiUrlBKP}/getSenaraiPermohonanGanti`)
      .pipe(
        map(data =>
          data.map(item => ({
            ...item,
            kelulusan: item.kelulusan === true || item.kelulusan === 'true'
          }))
        )
      );
  }

  getMaklumatPegawaiGantianTugas(id: string): Observable<MaklumatPemohon> {
    return this.http.get<MaklumatPemohon>(`${this.apiUrlBKP}/getMaklumatPegawaiGantianTugas?id=${id}`)
  }

  getSenaraiGantianPemohon(tarikh: string): Observable<SenaraiGantianPemohon[]> {
    return this.http.get<any[]>(`${this.apiUrlBKP}/getSenaraiGantianPemohon?tarikh=${tarikh}`)
  }

  getMaklumatPenggantiPemohon(request: RequestPenggantiPemohon): Observable<any> {
      return this.http.get<any>(`${this.apiUrlBKP}/getMaklumatPenggantiPemohon?stfMstr=${request.stfMstrUid}`);
  }

  postPermohonanGantiBaharu(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrlBKP}/postPermohonanGantianBaharu`, payload);
  }

}
