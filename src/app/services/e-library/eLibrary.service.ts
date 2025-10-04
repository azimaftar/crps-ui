import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { apiConfig } from '../../api.config';
// DTO from BE

// UC1: MuatNaik / Kemaskini Dokumen
export interface PostMuatNaikDokumenRequest {
  staffId: string;
  folderName: string;
  fileName: string;
  filePath: string;
}

export interface MuatNaikDokumenResponse {
  uid: string;
  staffId: string;
  folderName: string;
  fileName: string;
  filePath: string;
  uploadDate: string;
  approvalStatus: string;
  recordStatus: string;
  createDate: string;
  updateDate: string;
}

// UC2: Semakan Kelulusan
export interface SemakanKelulusanRequest {
  documentId: string;
  staffId: string;
}

export interface SemakanKelulusanResponse {
  documentId: string;
  approvalStatus: string;
  approvedBy: string;
  remarks: string;
}

// UC3: Konfigurasi Peranan
export interface KonfigurasiPerananRequest {
  documentId: string;
  staffPosition: string;
  downloadStatus: number;
  printStatus: number;
  viewStatus: string;
}

export interface KonfigurasiPerananResponse {
  uid: string;
  documentId: string;
  staffPosition: string;
  downloadStatus: number;
  printStatus: number;
  viewStatus: string;
  recordStatus: string;
  createDate: string;
  updateDate: string;
  status: string;
}

// Carian (shared for all use cases)
export interface CarianRequest {
  namaDokumen?: string;
  nomborDokumen?: string;
  tahun?: string;
}

export interface CarianResponse {
  uid: string;
  namaDokumen: string;
  tahun: string;
  status: string;
  folderName: string;
  staffId: string;
}

export interface StaffRoleConfig {
  staffPosition: string;      // "Staff grade
  downloadStatus: boolean; // Can download
  uploadStatus: boolean;   // Can upload
  viewStatus: boolean;     // Can view
}

@Injectable({ providedIn: 'root' })
export class ELibraryService {
  private baseUrl = apiConfig.apiUrlBkp;

  constructor(private http: HttpClient) {}

  // UC1: MuatNaik Dokumen
  postMuatNaikDokumen(payload: PostMuatNaikDokumenRequest): Observable<MuatNaikDokumenResponse> {
    return this.http.post<MuatNaikDokumenResponse>(`${this.baseUrl}/postMuatNaikDokumen`, payload);
  }

  kemaskiniMaklumat(id: string, payload: PostMuatNaikDokumenRequest): Observable<MuatNaikDokumenResponse> {
    return this.http.put<MuatNaikDokumenResponse>(`${this.baseUrl}/putKemaskiniMaklumat/${id}`, payload);
  }

  simpanPermohonan(id: string): Observable<MuatNaikDokumenResponse> {
    return this.http.post<MuatNaikDokumenResponse>(`${this.baseUrl}/postMaklumatPermohonan/${id}`, {});
  }

  hantarPermohonan(id: string): Observable<MuatNaikDokumenResponse> {
    return this.http.put<MuatNaikDokumenResponse>(`${this.baseUrl}/putMaklumatPermohonan/${id}`, {});
  }

  // Get Dokumen By Id - soon replace w actual endpoint
  getDokumenById(id: string): Observable<MuatNaikDokumenResponse> {
    return this.http.get<MuatNaikDokumenResponse>(`${this.baseUrl}/getDokumen/${id}`);
  }


  // UC2: Semakan Kelulusan
  semakanKelulusan(payload: SemakanKelulusanRequest): Observable<SemakanKelulusanResponse> {
    return this.http.post<SemakanKelulusanResponse>(`${this.baseUrl}/semakanKelulusan`, payload);
  }

  /**
 * Submit approval decision (Hantar)
 * @param id Document UID
 * @returns Observable<MuatNaikDokumenResponse>
 */
hantarKelulusan(id: string): Observable<MuatNaikDokumenResponse> {
  return this.http.put<MuatNaikDokumenResponse>(`${this.baseUrl}/putMaklumatPermohonan/${id}`, {});
}

/**
 * Save approval decision (Simpan)  
 * @param id Document UID
 * @returns Observable<MuatNaikDokumenResponse>
 */
simpanKelulusan(id: string): Observable<MuatNaikDokumenResponse> {
  return this.http.post<MuatNaikDokumenResponse>(`${this.baseUrl}/postMaklumatPermohonan/${id}`, {});
}

  // UC3: Setkan Konfigurasi Peranan
  setKonfigurasiPeranan(payload: KonfigurasiPerananRequest, staffId: string): Observable<KonfigurasiPerananResponse> {
    return this.http.post<KonfigurasiPerananResponse>(
      `${this.baseUrl}/setKonfigurasiPeranan`,
      payload,
      { headers: { 'X-StaffId': staffId } }
    );
  }
  /**
 * Get available staff position (might need to create this endpoint)
 * @returns Observable<string[]> List of staff position
 */
getStaffPosition(): Observable<string[]> {
  // This endpoint might not exist yet. ask SA to create it
  //  use a fallback to mock data if this fails
  return this.http.get<string[]>(`${this.baseUrl}/getStaffPosition`).pipe(
    catchError(() => {
      // Fallback to mock data if endpoint doesn't exist
      return of(['Gred 11', 'Gred 14', 'Gred 19', 'Gred 22', 'Gred 29', 'Gred 41', 'Gred 44', 'Gred 48', 'Gred 52', 'Gred 54']);
    })
  );
}

/**
 * Get existing role configuration for a document
 * @param documentId Document UID
 * @returns Observable<KonfigurasiPerananResponse[]>
 */
getKonfigurasiPeranan(documentId: string): Observable<KonfigurasiPerananResponse[]> {
  return this.http.get<KonfigurasiPerananResponse[]>(`${this.baseUrl}/getKonfigurasiPeranan/${documentId}`).pipe(
    catchError(() => {
      // Return empty array if endpoint doesn't exist
      return of([]);
    })
  );
}

  // Carian (shared) 
  carianDokumen(payload: CarianRequest): Observable<CarianResponse[]> {
  // Build query parameters
  let params = new HttpParams();
  
  if (payload.namaDokumen) {
    params = params.set('namaDokumen', payload.namaDokumen);
  }
  if (payload.nomborDokumen) {
    params = params.set('nomborDokumen', payload.nomborDokumen);
  }
  if (payload.tahun) {
    params = params.set('tahun', payload.tahun);
  }
  
  return this.http.get<CarianResponse[]>(`${this.baseUrl}/carianMuatNaikDokumen`, { params });
}
}
