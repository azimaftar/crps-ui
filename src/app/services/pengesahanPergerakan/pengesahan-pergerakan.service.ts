import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {apiConfig} from "../../api.config";
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface RefNumber {
    refNo: string,
}

export interface DokumenSokongan {
    id?: number;
    keterangan: string;
    namaDocumen?: string;
    fileName?: string;
    format?: string;
    fileData?: string; // Base64 encoded file data
    isUploaded: boolean;
    isCustom: boolean;
}

export interface Permohonan {
    applCat:string,
    officeState:string,
    refNo:string,
    letterDate:string,
    officerName:string,
    address1: string,
    address2: string,
    address3: string,
    poskod:string,
    bandar:string,
    emel:string,
    applPurpose:string,
    tempohMaklumatPergerakan:string,
    moveStartDt:string,
    moveEndDt:string,
    maklumatPergerakanTerakhir:string,
    name:string,
    kpNo:string,
    docNo:string,
    pasType:string,
    citizenship:string,
    bahagian:string,
    stampNo:string,

    dokumenSokongan: DokumenSokongan[],
}

export interface FID_request {
    name: string,
    kpNo: string,
    docNo: string,
    citizenship: string,
}

export interface FID_response {
    name: string,
    kpNo: string,
    docNo: string,
    citizenship: string,
    FID: string,
}

export interface MaklumatResponse {
    name: string,
    kpNo: string,
    docNo: string,
    citizenship: string,
    FID: string,
    moveStartDt:string,
    moveEndDt:string,
}

export interface CapKeselamatanResponse {
    refNo:string,
    stampNo:string,
    attchName: string,
    attchType: string,
    attachment: Document,
}

export interface MaklumatPasRequest {
    name: string,
    kpNo: string,
    docNo: string,
    citizenship: string,
    FID: string,
    pasNo:string,
    pasType:string,
}

export interface MaklumatPasResponse {
    name: string,
    kpNo: string,
    docNo: string,
    citizenship: string,
    FID: string,
    pasNo:string,
    pasType:string,
    attchName: string,
    attchType: string,
    attachment: Document,
}

export interface MaklumatSLRequest {
    name: string,
    kpNo: string,
    docNo: string,
    citizenship: string,
    FID: string,
}

export interface MaklumatSLResponse {
    name: string,
    kpNo: string,
    docNo: string,
    citizenship: string,
    FID: string,
    slStatus: string,
}

export interface SemakanRequest {
    refNo: string,
    FID: string,
    vrfyCat: string,
    vrfySts: string,
}

export interface SemakanResponse {
    receivedStatus: string,
    resultSuccCd: string,
    resultErrCd: string,
}

export interface CetakResponse {
    applCat: string,
    name:string,
    status:string,
    citizenship:string,
}


@Injectable({
  providedIn: 'root',
})

export class PengesahanPergerakanService {

    private apiURL = apiConfig.apiUrlSec;

    constructor(private http: HttpClient) {}

    postDaftarPermohonan(data: Permohonan, action: string): Observable<string> {
        console.log('=== SERVICE METHOD CALLED ===');
        console.log('Data:', data);
        console.log('Action:', action);

        const url = `${this.apiURL}/postDaftarPermohonan`;
        console.log('URL:', url);

        // Create HttpParams for the action parameter
        const params = new HttpParams().set('action', action);

        // Send the data directly as the request body, action as query param
        return this.http.post<string>(url, data, { params }).pipe(
            tap(response => console.log('Service response:', response)),
            catchError(error => {
                console.log('Service error:', error);
                return throwError(() => error);
            })
        );
    }

    getMaklumatPermohonan(request: Permohonan): Observable<Permohonan> {
    const params = new HttpParams().set('refNo', request.refNo);
        return this.http.get<Permohonan>(`${this.apiURL}/getMaklumatPermohonan`, {params});
    }

    // assuming kpNo
    getFID(request: FID_request): Observable<FID_response> {
    const params = new HttpParams().set('kpNo', request.kpNo);
        return this.http.get<FID_response>(`${this.apiURL}/getFID`, {params});
    }

    getMaklumatPergerakan(request: MaklumatResponse): Observable<MaklumatResponse> {
    const params = new HttpParams().set('FID', request.FID);
        return this.http.get<MaklumatResponse>(`${this.apiURL}/getMaklumatPergerakan`, {params});
    }

    getMaklumatPas(request: MaklumatPasRequest): Observable<MaklumatPasResponse> {
    const params = new HttpParams().set('FID', request.FID);
        return this.http.get<MaklumatPasResponse>(`${this.apiURL}/getMaklumatPas`, {params});
    }

    getMaklumatSL(request: MaklumatSLRequest): Observable<MaklumatSLResponse> {
    const params = new HttpParams().set('FID', request.FID);
        return this.http.get<MaklumatSLResponse>(`${this.apiURL}/getMaklumatSL`, {params});
    }

    postSemakan(request: RefNumber): Observable<string>{
        return this.http.post(`${this.apiURL}/postSemakan`, request,{ responseType: 'text'});
    }

    getCetak(request: RefNumber): Observable<CetakResponse> {
    const params = new HttpParams().set('refNo', request.refNo);
        return this.http.get<CetakResponse>(`${this.apiURL}/getCetak`, {params});
    }
}
