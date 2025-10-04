import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {apiConfig} from "../../../../../api.config";

@Injectable({
  providedIn: 'root'
})

export class CarianVaksinService {
  private apiUrl = apiConfig.apiUrlBkp; 
  constructor(private http: HttpClient) {}

  getMaklumatCarianRekod(vaccName?: string, vaccYear?: string) {
   // let url = 'http://localhost:8080/BKP/getMaklumatCarianRekod'; //FOR NOW GUNA SEC
  
    let params = new HttpParams();
    if (vaccName) params = params.set('vaccName', vaccName);
    if (vaccYear) params = params.set('vaccYear', vaccYear);

    return this.http.get<any>(`${this.apiUrl}/getMaklumatCarianRekod`, { params });
  }
}
