import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiConfig } from '../../../../api.config';

export interface TarikhSuntikVaksinDTO {
    id?: string;
    name: string;
    branch: string;
    division: string;
    unit: string;
    group: string;
    vaccName: string;
    vaccQuota: string;
    startDate: string;
    endDate: string;
    // status: number;
    // approvalSTS: number;
}

@Injectable({
    providedIn: 'root'
})
export class TarikhSuntikVaksinService {
    private apiUrl = apiConfig.apiUrlBkp;

    constructor(private http: HttpClient) {}

    // Get Imigresen Branch
    getBranches(): Observable<TarikhSuntikVaksinDTO[]> {
        return this.http.get<TarikhSuntikVaksinDTO[]>(`${this.apiUrl}/branch/getBranchImigresen`);
    }

    // Get State
    getState(): Observable<TarikhSuntikVaksinDTO[]> {
        return this.http.get<TarikhSuntikVaksinDTO[]>(`${this.apiUrl}/state`);
    }

    // Get Unit
    getUnit(): Observable<TarikhSuntikVaksinDTO[]> {
        return this.http.get<TarikhSuntikVaksinDTO[]>(`${this.apiUrl}/unit`);
    }
}