import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../../../api.config';

export interface KelulusanVaksinDTO {
    id?: string;
    stateCode: string;
    branchCode: string;
    division: string;
    unitCode: string;
    vaccYear: string;
    // status: number;
    // approvalSTS: number;
}

@Injectable({
    providedIn: 'root'
})
export class KelulusanVaksinService {
    private apiUrl = apiConfig.apiUrlBkp;

    constructor(private http: HttpClient) {}

    // Get Imigresen Branch
    getBranches(): Observable<KelulusanVaksinDTO[]> {
        return this.http.get<KelulusanVaksinDTO[]>(`${this.apiUrl}/branchImigresen`);
    }

    // Get State
    getState(): Observable<KelulusanVaksinDTO[]> {
        return this.http.get<KelulusanVaksinDTO[]>(`${this.apiUrl}/state`);
    }

    // Get Unit
    getUnit(): Observable<KelulusanVaksinDTO[]> {
        return this.http.get<KelulusanVaksinDTO[]>(`${this.apiUrl}/unit`);
    }
}