import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Request model (for clarity, even if it's just one param)
export interface LeaveHistoryRequest {
  stfMstrUid: string;
}

// Response model (match your backend DTO)
export interface LeaveHistoryResponse {
  jenisCuti: string;
  tarikhMohon: string;
  tarikhMula: string;
  tarikhTamat: string;
  bilHari: number;
  disahkanOleh: string;
  statusCuti: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeaveHistoryService {
  private apiLeaveHistoryUrl = environment.production
      ? '/adm-services/v1/ADM'
      : 'http://localhost:8080/ADM';

  constructor(private http: HttpClient) {}

  // Get leave history by staff UID
  getLeaveHistoryByUid(request: LeaveHistoryRequest): Observable<any> {
    return this.http.get<any>(`${this.apiLeaveHistoryUrl}/getLeaveHistory?stfMstrUid=${request.stfMstrUid}`);
  }
}
