import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { apiConfig } from "../../api.config";

export interface carianpermohonan {
  kpNo?: string;
  name?: string;
  docNum?: string;
  dob?: string;
  nationality?: string;
  fid?: string;
  recstat?: string;
}

export interface GroupedSubjects {
  [jenisPermohonan: string]: carianpermohonan[];
}

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjectsUrl = 'http://localhost:3000/subjects'; // subjects JSON
  private apiUrl = apiConfig.apiUrlSec; // your Express API base URL

  constructor(private http: HttpClient) {}

  // === Fetch and Group Subjects ===
  // getGroupedSubjects(): Observable<GroupedSubjects> {
  //   return this.http.get<carianpermohonan[]>(this.subjectsUrl).pipe(
  //     map((subjects: carianpermohonan[]) => {
  //       const grouped: GroupedSubjects = {};
  //       for (const subject of subjects) {
  //         const key = subject.jenisPermohonan || 'Unknown';
  //         if (!grouped[key]) grouped[key] = [];
  //         grouped[key].push(subject);
  //       }
  //       return grouped;
  //     })
  //   );
  // }

  // === File Upload ===
  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.apiUrl}/upload`, formData);
  }

  // === Submit All Data (initial or final submission) ===
  submitAll(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/submit`, data);
  }

  // === Kemas Kini: Search by Date ===
  searchByDate(date: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/submissions`)
      .pipe(
        map((data) =>
          data.filter((item) => item.tarikhHantarPermohonan === date)
        )
      );
  }

  // === Kemas Kini: Search by Notis ID ===
  searchByIdNotis(id: string): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.apiUrl}/submissions`)
      .pipe(map((data) => data.filter((item) => item.notisID.includes(id))));
  }

  // === Kemas Kini: This Week's Submissions ===
  // Show only status = baru
  getThisWeekSubmissions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/submissions`).pipe(
      map((data) => {
        const now = new Date();
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay()); // Sunday

        return data.filter((item) => {
          // Skip if date is missing or malformed
          if (
            !item.tarikhHantarPermohonan ||
            !item.tarikhHantarPermohonan.includes('-')
          ) {
            console.warn('Skipping item with invalid date:', item);
            return false;
          }

          const [day, month, year] = item.tarikhHantarPermohonan.split('-');
          const tarikhHantarPermohonan = new Date(+year, +month - 1, +day);

          return (
            tarikhHantarPermohonan >= startOfWeek &&
            tarikhHantarPermohonan <= now
          );
        });
      })
    );
  }

  searchByFID(
    fid: string,
    kategoriCarian: string,
    page: string
  ): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search-wfr12`, {
      params: { fid, kategoriCarian, page },
    });
  }

  // cariWfr12_3(
  //   kategoriCarian: string,
  //   page: string,
  //   additionalParams: {
  //     noPengenalan?: string;
  //     name?: string;
  //     birthDate?: string;
  //     wn?: string;
  //     passportNumber?: string;
  //     namaNoRujukan?: string;
  //   }
  // ): Observable<any[]> {
  //   const params: any = {
  //     kategoriCarian,
  //     page,
  //     ...additionalParams
  //   };

  //   return this.http.get<any[]>(`${this.apiUrl}/cari-wfr12.3`, { params });
  // }

  // // subject.service.ts
  // searchByPengenalan(noPengenalan: string): Observable<any> {
  //   return this.http.get<any[]>(`${this.apiUrl}/semakIndividuProfile2.1`, {
  //     params: { kpNo: noPengenalan },
  //   });
  // }

  getProfile(noPengenalan: string) {
    return this.http.get<any[]>(`${this.apiUrl}/semakIndividuProfile2.1`, {
      params: { kpNo: noPengenalan },
    });
  }

  getPas(noPengenalan: string) {
    return this.http.get<any[]>(`${this.apiUrl}/semakIndividuPas2.1`, {
      params: { kpNo: noPengenalan },
    });
  }

  getSL(noPengenalan: string) {
    return this.http.get<any[]>(`${this.apiUrl}/semakIndividuSL2.1`, {
      params: { kpNo: noPengenalan },
    });
  }

  getPergerakan(noPengenalan: string) {
    return this.http.get<any[]>(`${this.apiUrl}/semakIndividuPergerakan2.1`, {
      params: { kpNo: noPengenalan },
    });
  }

  getMaritalStatus() {
    return this.http.get<any[]>(`${this.apiUrl}/getMaritalStatus`);
  }

  // Carian Permohonan API
  carianPermohonan(
    kategoriCarian: string,
    page: string,
    searchParams: {
      noKp?: string;
      nama?: string;
      dob?: string;
      nationality?: string;
      docNum?: string;
      fid?: string;
      recstat?: string;
    }
  ): Observable<carianpermohonan[]> {
    let params = new HttpParams();

    (Object.keys(searchParams) as Array<keyof typeof searchParams>).forEach(
      (key) => {
        const value = searchParams[key];
        if (value !== undefined && value !== '') {
          params = params.set(key, value);
        }
      }
    );

    return this.http
      .get<{ records?: carianpermohonan[]; code?: string; message?: string }>(
        `${this.apiUrl}/getsemakPermohonan02.2`,
        { params }
      )
      .pipe(
        map((response) => {
          if (response.records) {
            return response.records.map((r) => ({
              kpNo: r.kpNo,
              name: r.name,
              docNum: r.docNum,
              dob: r.dob,
              nationality: r.nationality,
              fid: r.fid,
              recstat:
                r.recstat === '0'
                  ? 'Tidak Aktif'
                  : r.recstat === '1'
                  ? 'Aktif'
                  : '',
            }));
          } else {
            throw new Error(response.message || 'Unknown error');
          }
        })
      );
  }

  penerimaanpermohonan(
    kategoriCarian: string,
    page: string,
    searchParams: {
      noKp?: string;
      nama?: string;
      dob?: string;
      nationality?: string;
      docNum?: string;
      fid?: string;
      recstat?: string;
    }
  ): Observable<carianpermohonan[]> {
    let params = new HttpParams();

    (Object.keys(searchParams) as Array<keyof typeof searchParams>).forEach(
      (key) => {
        const value = searchParams[key];
        if (value !== undefined && value !== '') {
          params = params.set(key, value);
        }
      }
    );

    return this.http
      .get<{ records?: carianpermohonan[]; code?: string; message?: string }>(
        `${this.apiUrl}/getsemakPermohonan02.2`,
        { params }
      )
      .pipe(
        map((response) => {
          if (response.records) {
            return response.records.map((r) => ({
              kpNo: r.kpNo,
              name: r.name,
              docNum: r.docNum,
              dob: r.dob,
              nationality: r.nationality,
              fid: r.fid,
              recstat:
                r.recstat === '0'
                  ? 'Tidak Aktif'
                  : r.recstat === '1'
                  ? 'Aktif'
                  : '',
            }));
          } else {
            throw new Error(response.message || 'Unknown error');
          }
        })
      );
  }
  // Carian Permohonan API
  carianSLPenerimaan(
    kategoriCarian: string,
    page: string,
    searchParams: {
      noKp?: string;
      nama?: string;
      dob?: string;
      nationality?: string;
      docNum?: string;
      fid?: string;
      recstat?: string;
    }
  ): Observable<carianpermohonan[]> {
    let params = new HttpParams();

    (Object.keys(searchParams) as Array<keyof typeof searchParams>).forEach(
      (key) => {
        const value = searchParams[key];
        if (value !== undefined && value !== '') {
          params = params.set(key, value);
        }
      }
    );

    return this.http
      .get<{ records?: carianpermohonan[]; code?: string; message?: string }>(
        `${this.apiUrl}/getsemakStatusSL02.3`,
        { params }
      )
      .pipe(
        map((response) => {
          if (response.records) {
            return response.records.map((r) => ({
              kpNo: r.kpNo,
              name: r.name,
              docNum: r.docNum,
              dob: r.dob,
              nationality: r.nationality,
              fid: r.fid,
              recstat:
                r.recstat === '0'
                  ? 'Tidak Aktif'
                  : r.recstat === '1'
                  ? 'Aktif'
                  : '',
            }));
          } else {
            throw new Error(response.message || 'Unknown error');
          }
        })
      );
  }

  // Daftar Permohonan
  submitPermohonan(payload: any, file?: File): Observable<any> {
    const formData = new FormData();

    // JSON part
    formData.append(
      'request',
      new Blob([JSON.stringify(payload)], { type: 'application/json' })
    );

    // File part (optional)
    if (file) {
      formData.append('supportDocs', file, file.name);
    }

    return this.http.post<any>(
      `${this.apiUrl}/postDaftarPermohonan2.1`,
      formData
    );
  }

  // Senarai Permohonan
  getPermohonanList(): Observable<carianpermohonan[]> {
    return this.http.get<carianpermohonan[]>(
      this.apiUrl + 'getSenaraiPermohonan02.1'
    );
  }
}
