import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Subject {
  noPengenalan: string;
  noPasport: string;
  birthDate: string;
  noDokumen: string;
  wn: string;
  nama: string;
  status: string;
  jenisPermohonan: string;
  refIdSuratKebenaranKeluar: string;
  notisPenolakanMasuk: string;
  noSPK: string;
  tarikhMulaPergerakan: string;
  tarikhAkhirPergerakan: string;
  namaTarikhLahir: string;
  noPelekat: string;
  passKewarganegaraan: string;
  noEStamp: string;
  noMemo: string;
  jantina: string;
  namaNoRujukan: string;
}

export interface GroupedSubjects {
  [jenisPermohonan: string]: Subject[];
}

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  private subjectsUrl = 'http://localhost:3000/subjects'; // subjects JSON
  private apiUrl = 'http://localhost:2000/api'; // your Express API base URL

  constructor(private http: HttpClient) {}

  // === Fetch and Group Subjects ===
  getGroupedSubjects(): Observable<GroupedSubjects> {
    return this.http.get<Subject[]>(this.subjectsUrl).pipe(
      map((subjects: Subject[]) => {
        const grouped: GroupedSubjects = {};
        for (const subject of subjects) {
          const key = subject.jenisPermohonan || 'Unknown';
          if (!grouped[key]) grouped[key] = [];
          grouped[key].push(subject);
        }
        return grouped;
      })
    );
  }

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
    return this.http.get<any[]>(`${this.apiUrl}/submissions`).pipe(
      map((data) => data.filter((item) => item.tarikhHantarPermohonan === date))
    );
  }

  // === Kemas Kini: Search by Notis ID ===
  searchByIdNotis(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/submissions`).pipe(
      map((data) => data.filter((item) => item.notisID.includes(id)))
    );
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
          if (!item.tarikhHantarPermohonan || !item.tarikhHantarPermohonan.includes('-')) {
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

  searchByPengenalan(noPengenalan: string, kategoriCarian: string, page: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search-wfr12`, {
      params: { noPengenalan, kategoriCarian, page }
    });
  }

  cariWfr12_3(
    kategoriCarian: string,
    page: string,
    additionalParams: {
      noPengenalan?: string;
      name?: string;
      birthDate?: string;
      wn?: string;
      passportNumber?: string;
      namaNoRujukan?: string;
    }
  ): Observable<any[]> {
    const params: any = {
      kategoriCarian,
      page,
      ...additionalParams
    };

    return this.http.get<any[]>(`${this.apiUrl}/cari-wfr12.3`, { params });
  }

}
