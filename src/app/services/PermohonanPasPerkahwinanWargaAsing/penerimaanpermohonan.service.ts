import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import {apiConfig} from "../../api.config";
export interface penerimaanpermohonan {
  kpNo?: string;
  name?: string;
  docNum?: string;
  dob?: string;
}

export class subjectService {
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
}
