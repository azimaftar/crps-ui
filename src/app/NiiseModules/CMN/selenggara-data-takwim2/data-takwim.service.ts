import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HolidayService {
  private apiUrl = 'https://your-api-url.com/api'; // Replace with your actual API

  constructor(private http: HttpClient) {}

  getHolidays(year: number, region: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/holidays?year=${year}&region=${region}`);
  }

  getHolidaysByDate(date: string, region: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/holidays/by-date?date=${date}&region=${region}`);
  }

  addHoliday(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/holidays`, data);
  }

  updateHoliday(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/holidays/${id}`, data);
  }

  deleteHoliday(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/holidays/${id}`);
  }
}
