import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

interface ApiResponse {
  data: {
    content: { [key: string]: string | null }[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: { empty: boolean; sorted: boolean; unsorted: boolean };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    numberOfElements: number;
    empty: boolean;
  };
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.production ? '/cmn-services/v1/CMN' : '/CMN';

  constructor(private http: HttpClient) {}

  getDataRujukanByTable(
    table: string,
    page: number,
    size: number
  ): Observable<ApiResponse> {
    const apiPage = page - 1;
    const params = { table, page: apiPage.toString(), size: size.toString() };
    return this.http.get<ApiResponse>(`${this.baseUrl}/getValRujukan`, { params });
  }

  getDataRujukanByCarian(
    searchText: string
  ): Observable<{ [key: string]: string | null }[]> {
    return this.http.get<{ [key: string]: string | null }[]>(
      `${this.baseUrl}/getDataRujukanByCarian?search=${searchText}`
    );
  }

  getValRujukanByKod(table: string, refCode: string): Observable<{ data: any }> {
    return this.http.get<{ data: any }>(
      `${this.baseUrl}/getValRujukanByKod?table=${table}&refCode=${refCode}`
    );
  }

  updateDataRujukan(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/postPermohonanDataRujukan`, data);
  }
}
