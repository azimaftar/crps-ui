import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../../../api.config';

export interface PublishTarikhPaparDTO {
  id?: string;
  vaccId: string;
  vaccName: string;
  vaccYear: string;
  // pubSTS: string;
  pubDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class PublishTarikhPaparService {
  private apiUrl = apiConfig.apiUrlBkp; 
  // private apiUrl = 'http://localhost:8080/BKP/publish'; //For now guna SEC
  constructor(private http: HttpClient) {}

  getCarianPublish(vaccName?: string, vaccYear?: string) {
   // let url = 'http://localhost:8080/BKP/publish/getMaklumatCarianRekod'; //FOR NOW GUNA SEC

    let params = new HttpParams();
    if (vaccName) params = params.set('vaccName', vaccName);
    if (vaccYear) params = params.set('vaccYear', vaccYear);

    return this.http.get<any>(`${this.apiUrl}/publish/getMaklumatCarianRekod`, { params });
  }

  //simpan
  simpanPublish(data: PublishTarikhPaparDTO): Observable<PublishTarikhPaparDTO> {
    return this.http.post<PublishTarikhPaparDTO>(`${this.apiUrl}/publish/postMaklumatPermohonan`, data);
  }

  //Hantar
  hantarPublish(id: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/publish/putKemaskiniNotifikasi/${id}`, {});
}

  //Kemaskini
  kemaskiniPublish(id: string, pubDate: string): Observable<any> {
  return this.http.put(`${this.apiUrl}/publish/putMaklumatPermohonan/${id}`, {pubDate});
  }

}
