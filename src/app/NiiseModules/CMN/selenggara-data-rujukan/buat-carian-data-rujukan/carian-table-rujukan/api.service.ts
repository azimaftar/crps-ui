import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

export interface RefData {
  code: string;
  descBm: string;
  descBi: string;
  status: string;
  createId: string;
  createDate: string;
  updateId: string;
  updateDate: string;
}

export interface ValRujukanItem {
  docCode: string;
  docBmDesc: string;
  docBiDesc: string;
  recSts: string;
  createId: string;
  createDate: string;
  updateId: string | null;
  updateDate: string | null;
  [key: string]: string | null | undefined;
}

export interface ValRujukanResponse {
  data: {
    content: ValRujukanItem[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        sorted: boolean;
        empty: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: {
      sorted: boolean;
      empty: boolean;
      unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  };
  message: string;
  status: string;
}

export interface DataRujukanNewResponse {
  data: {
    content: NewApiResponse[];
    pageable: {
      pageNumber: number;
      pageSize: number;
      sort: {
        sorted: boolean;
        empty: boolean;
        unsorted: boolean;
      };
      offset: number;
      paged: boolean;
      unpaged: boolean;
    };
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: {
      sorted: boolean;
      empty: boolean;
      unsorted: boolean;
    };
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  };
  message: string;
  status: string;
}

interface ApiResponse {
  data: {
    content: string[];
    pageable: {
      pageNumber: number;
      pageSize: number;
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
    numberOfElements: number;
    empty: boolean;
  };
  message: string;
  status: string;
}

interface NewApiResponse {
  uid: string;
  tblName: string;
  desc: string;
}

interface SearchApiResponse {
  tblName: string;
  desc: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.production ? '/cmn-services/v1/CMN' : '/CMN';

  constructor(private http: HttpClient) {}

  getDataRujukan(page: number, size: number): Observable<ApiResponse['data']> {
    const apiPage = page - 1;
    const params = new HttpParams()
      .set('page', apiPage.toString())
      .set('size', size.toString());

    return this.http.get<ApiResponse>(`${this.apiUrl}/getDataRujukan`, { params }).pipe(
      map(response => response.data || { content: [], totalElements: 0, totalPages: 0, number: 0 })
    );
  }

  getDataRujukanNew(page: number = 0, size: number = 10, actStatus: string = '0'): Observable<DataRujukanNewResponse['data']> {
    const params = new HttpParams()
      .set('actStatus', actStatus)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<DataRujukanNewResponse>(
      `${this.apiUrl}/getDataRujukan`,
      { params }
    ).pipe(
      map(response => response.data),
      catchError(error => {
        console.error('Data Rujukan API Error:', error);
        return throwError(() => new Error('Failed to fetch data from API'));
      })
    );
  }

  getDataRujukanNewAll(actStatus: string = '0'): Observable<NewApiResponse[]> {
    const params = new HttpParams().set('actStatus', actStatus);
    
    return this.http.get<{ data: NewApiResponse[], message: string, status: string }>(
      `${this.apiUrl}/getDataRujukanNew`,
      { params }
    ).pipe(
      map(response => response.data || []),
      catchError(error => {
        console.error('New API Error:', error);
        return throwError(() => new Error('Failed to fetch data from new API'));
      })
    );
  }

  getDataRujukanByCarianNew(searchTerm: string): Observable<SearchApiResponse[]> {
    const params = new HttpParams().set('searchTerm', searchTerm.trim());
    
    return this.http.get<{ data: SearchApiResponse[], message: string, status: string }>(
      `${this.apiUrl}/getDataRujukanByCarian`,
      { params }
    ).pipe(
      map(response => {
        console.log('Raw Search API Response:', response);
        console.log('Response data:', response.data);
        
        return response.data || [];
      }),
      catchError(error => {
        console.error('Search API Error:', error);
        return throwError(() => error);
      })
    );
  }

  getValRujukan(table: string, page: number, size: number): Observable<ValRujukanResponse['data']> {
    const params = new HttpParams()
      .set('table', table)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http.get<ValRujukanResponse>(`${this.apiUrl}/getValRujukan`, { params }).pipe(
      map(response => response.data || { content: [], totalElements: 0, totalPages: 0, number: 0 }),
      catchError(error => {
        console.error('API Error:', error);
        return throwError(() => new Error('Failed to fetch data'));
      })
    );
  }

  getDataRujukanByCarian(searchText: string): Observable<string[]> {
    const params = new HttpParams()
      .set('refTbl', searchText);
    
    return this.http.get<{ data: { result: string[] }, message: string, status: string }>(`${this.apiUrl}/getDataRujukanByCarian`, { params }).pipe(
      map(response => {
        console.log('Raw Search Response:', response);
        console.log('Response data.result:', response.data?.result);
        return response.data?.result || [];
      }),
      catchError(error => {
        console.error('Search API Error:', error);
        return throwError(() => new Error('Failed to search data'));
      })
    );
  }

  getRefData(table: string): Observable<RefData[]> {
    const params = new HttpParams().set('table', table);
    return this.http.get<RefData[]>(`${this.apiUrl}/api/ref`, { params }).pipe(
      map(response => response || [])
    );
  }

  createRefData(table: string, refData: RefData): Observable<RefData> {
    const params = new HttpParams().set('table', table);
    return this.http.post<RefData>(`${this.apiUrl}/api/ref`, refData, { params });
  }

  updateRefData(table: string, code: string, refData: RefData): Observable<RefData> {
    const params = new HttpParams().set('table', table);
    return this.http.put<RefData>(`${this.apiUrl}/api/ref/${code}`, refData, { params });
  }

  deleteRefData(table: string, code: string): Observable<void> {
    const params = new HttpParams().set('table', table);
    return this.http.delete<void>(`${this.apiUrl}/api/ref/${code}`, { params });
  }

  mockGetRefData(table: string): Observable<RefData[]> {
    const mockData: RefData[] = [
      { code: 'A01', descBm: `Dokumen ${table} 1`, descBi: `Document ${table} 1`, status: 'A', createId: 'admin_user', createDate: '2025-06-10T10:00:00', updateId: 'admin_user', updateDate: '2025-06-10T10:15:00' },
      { code: 'A02', descBm: `Dokumen ${table} 2`, descBi: `Document ${table} 2`, status: 'A', createId: 'admin_user', createDate: '2025-06-10T10:30:00', updateId: 'admin_user', updateDate: '2025-06-10T10:45:00' },
      { code: 'A03', descBm: `Dokumen ${table} 3`, descBi: `Document ${table} 3`, status: 'A', createId: 'admin_user', createDate: '2025-06-10T11:00:00', updateId: 'admin_user', updateDate: '2025-06-10T11:15:00' },
    ];
    return of(mockData);
  }

  mockGetDataRujukan(page: number, size: number): Observable<ApiResponse> {
    const apiPage = page - 1;
    const allMockData: RefData[] = [
      { code: 'REF_001', descBm: 'Dokumen 1', descBi: 'Document 1', status: 'A', createId: 'admin_user', createDate: '2025-06-10T10:00:00', updateId: 'admin_user', updateDate: '2025-06-10T10:15:00' },
      { code: 'REF_002', descBm: 'Dokumen 2', descBi: 'Document 2', status: 'A', createId: 'admin_user', createDate: '2025-06-10T10:30:00', updateId: 'admin_user', updateDate: '2025-06-10T10:45:00' },
      { code: 'REF_003', descBm: 'Dokumen 3', descBi: 'Document 3', status: 'A', createId: 'admin_user', createDate: '2025-06-10T11:00:00', updateId: 'admin_user', updateDate: '2025-06-10T11:15:00' },
      { code: 'REF_004', descBm: 'Dokumen 4', descBi: 'Document 4', status: 'A', createId: 'admin_user', createDate: '2025-06-10T11:30:00', updateId: 'admin_user', updateDate: '2025-06-10T11:45:00' },
      { code: 'REF_005', descBm: 'Dokumen 5', descBi: 'Document 5', status: 'A', createId: 'admin_user', createDate: '2025-06-10T12:00:00', updateId: 'admin_user', updateDate: '2025-06-10T12:15:00' },
      { code: 'REF_006', descBm: 'Dokumen 6', descBi: 'Document 6', status: 'A', createId: 'admin_user', createDate: '2025-06-10T12:30:00', updateId: 'admin_user', updateDate: '2025-06-10T12:45:00' },
      { code: 'REF_007', descBm: 'Dokumen 7', descBi: 'Document 7', status: 'A', createId: 'admin_user', createDate: '2025-06-10T13:00:00', updateId: 'admin_user', updateDate: '2025-06-10T13:15:00' },
      { code: 'REF_008', descBm: 'Dokumen 8', descBi: 'Document 8', status: 'A', createId: 'admin_user', createDate: '2025-06-10T13:30:00', updateId: 'admin_user', updateDate: '2025-06-10T13:45:00' },
      { code: 'REF_009', descBm: 'Dokumen 9', descBi: 'Document 9', status: 'A', createId: 'admin_user', createDate: '2025-06-10T14:00:00', updateId: 'admin_user', updateDate: '2025-06-10T14:15:00' },
      { code: 'REF_010', descBm: 'Dokumen 10', descBi: 'Document 10', status: 'A', createId: 'admin_user', createDate: '2025-06-10T14:30:00', updateId: 'admin_user', updateDate: '2025-06-10T14:45:00' },
      { code: 'REF_011', descBm: 'Dokumen 11', descBi: 'Document 11', status: 'A', createId: 'admin_user', createDate: '2025-06-10T15:00:00', updateId: 'admin_user', updateDate: '2025-06-10T15:15:00' },
      { code: 'REF_012', descBm: 'Dokumen 12', descBi: 'Document 12', status: 'A', createId: 'admin_user', createDate: '2025-06-10T15:30:00', updateId: 'admin_user', updateDate: '2025-06-10T15:45:00' },
      { code: 'REF_013', descBm: 'Dokumen 13', descBi: 'Document 13', status: 'A', createId: 'admin_user', createDate: '2025-06-10T16:00:00', updateId: 'admin_user', updateDate: '2025-06-10T16:15:00' },
      { code: 'REF_014', descBm: 'Dokumen 14', descBi: 'Document 14', status: 'A', createId: 'admin_user', createDate: '2025-06-10T16:30:00', updateId: 'admin_user', updateDate: '2025-06-10T16:45:00' },
      { code: 'REF_015', descBm: 'Dokumen 15', descBi: 'Document 15', status: 'A', createId: 'admin_user', createDate: '2025-06-10T17:00:00', updateId: 'admin_user', updateDate: '2025-06-10T17:15:00' },
    ];

    const startIndex = apiPage * size;
    const endIndex = startIndex + size;
    const paginatedData = allMockData.slice(startIndex, endIndex).map(item => item.code);
    const totalElements = allMockData.length;

    const response: ApiResponse = {
      data: {
        content: paginatedData,
        pageable: {
          pageNumber: apiPage,
          pageSize: size,
          offset: startIndex,
          paged: true,
          unpaged: false,
        },
        last: (apiPage + 1) * size >= totalElements,
        totalPages: Math.ceil(totalElements / size),
        totalElements: totalElements,
        first: apiPage === 0,
        size: size,
        number: apiPage,
        numberOfElements: paginatedData.length,
        empty: paginatedData.length === 0,
      },
      message: '',
      status: ''
    };

    return of(response);
  }
}