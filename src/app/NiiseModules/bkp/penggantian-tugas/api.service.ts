import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SenariaPermohonanGantian {
  namepegawai: string;
  nokp: string;
  gred: string;
  bahagian: string;
  unit: string;
  kumpulan: string;
  pegawaicatatan: string;
  catatantarikh: string;
  catatanmasa: string;
  kelulusan: string;
}

@Injectable({
  providedIn: 'root'
})
export class PermohonanService {

  private apiUrlBKP = 'http://localhost:8080/api/v1/bkp';

  constructor(private http: HttpClient) {}

  getSenaraiPermohonanGanti(): Observable<SenariaPermohonanGantian> {
    return this.http.get<SenariaPermohonanGantian>(
      `${this.apiUrlBKP}/getSenaraiPermohonanGanti`
    );
  }
}
