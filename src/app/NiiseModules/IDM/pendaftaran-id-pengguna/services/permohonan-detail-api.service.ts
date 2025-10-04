import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

/* ---------- Interfaces ---------- */
export interface PermohonanDetail {
  staffType: string;
  noServ: string;
  currKpNo: string;
  citizenship: string;
  name: string;
  dob: string; // LocalDate → string
  gender: string;
  phoneNumber: string;
  email: string;
  post: string;
  gred: string;
  stt: string;
  asgn: string;
  div: string;
  unit: string;
  gredXtra: string;
  keperluanBiometrik: 'Y' | 'T';
  jenisBiometrik: {
    capJari: boolean;
    wajah: boolean;
  };
  kaedahLog: {
    capJari: boolean;
    wajah: boolean;
    otp: boolean;
  };
}

export interface PermohonanDetailResponse {
  data: PermohonanDetail;
  message: string;
  status: string;
}

export interface HantarWujudIDPayload {
  j007UsrProTmpDTO: {
    mfid: string;
    brnZone: string;
    gredXtra: string;
    bioApprvInd: string;
    bioType: string;
    typeLogin: string;
    ptjCd: string;
  };
  j008UsrBrnTmpDTO: {
    brnCd: string;
  };
  j009UsrPtjTmpDTO: {
    ptjCd: string;
  };
  j010UsrRlTmPDTO: {
    rlCd: string;
    bizCd: string;
    unCd: string;
    authInd: string;
    exctxnInd: string;
  };
  j012UsrExctxnTmpDTO: {
    txnCd: string;
  };
  j026SupDocDTO: {
    doc: string;       
    type: string;
    nameDoc: string;
  };
}


export interface DeptDTO {
  deptCd: string;
  deptBmDesc: string;
}

export interface UnitDTO {
  unitCd: string;
  unitBmDesc: string;
}

export interface RoleDTO {
  roleCd: string;
  roleBmDesc: string;
}

export interface MaklumatPerananRefResponse {
  status: number;
  message: string;
  data: {
    r327DeptDTO: DeptDTO[];
    r334UnitDTO: UnitDTO[];
    r332RoleDTO: RoleDTO[];
  };
}

export interface PtjDTO {
  ptjCd: string;
  bmDesc: string;
}


export interface MaklumatPtjRefResponse {
  status: number;
  message: string;
  data: {
    r046PtjDTO: PtjDTO[];
  };
}

/* ---------- Service ---------- */
@Injectable({
  providedIn: 'root',
})
export class PermohonanDetailService {
  private apiUrl = environment.production
    ? '/idm-services/v1/IDM'
    : 'http://localhost:8080/IDM';

  /** Local draft cache */
  private draftPayload: HantarWujudIDPayload | null = null;

  constructor(private http: HttpClient) { }

  getPermohonanDetail(mfid: string): Observable<PermohonanDetailResponse> {
    const params = new HttpParams().set('mfid', mfid);
    return this.http.get<PermohonanDetailResponse>(
      `${this.apiUrl}/getPermohonanDetail`,
      { params }
    );
  }

  hantarPermohonan(payload?: HantarWujudIDPayload): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/hantarWujudID`,
      payload ?? this.getDraft()
    );
  }

  tolakPermohonan(payload?: HantarWujudIDPayload): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/tolakPermohonan`,
      payload ?? this.getDraft()
    );
  }

  getMaklumatPerananRef(): Observable<MaklumatPerananRefResponse> {
    return this.http.get<MaklumatPerananRefResponse>(
      `${this.apiUrl}/getMaklumatPerananRef`
    );
  }

  getMaklumatPtjRef(): Observable<MaklumatPtjRefResponse> {
    return this.http.get<MaklumatPtjRefResponse>(
      `${this.apiUrl}/getMaklumatPtjRef`
    );
  }

  private defaultDraft(): HantarWujudIDPayload {
    return {
      j007UsrProTmpDTO: {
        mfid: '',
        brnZone: '',
        gredXtra: '',
        bioApprvInd: '',
        bioType: '',
        typeLogin: '',
        ptjCd: '',
      },
      j008UsrBrnTmpDTO: { brnCd: '' },
      j009UsrPtjTmpDTO: { ptjCd: '' },
      j010UsrRlTmPDTO: {
        rlCd: '',
        bizCd: '',
        unCd: '',
        authInd: '',
        exctxnInd: '',
      },
      j012UsrExctxnTmpDTO: { txnCd: '' },
      j026SupDocDTO:{
        doc:'',
        type:'',
        nameDoc:''
      }
    };
  }


  setDraft(partial: Partial<HantarWujudIDPayload>): void {
    const current = this.draftPayload ?? this.defaultDraft();

    this.draftPayload = {
      ...current,
      ...partial,
      j007UsrProTmpDTO: {
        ...current.j007UsrProTmpDTO,
        ...partial.j007UsrProTmpDTO,
      },
      j008UsrBrnTmpDTO: {
        ...current.j008UsrBrnTmpDTO,
        ...partial.j008UsrBrnTmpDTO,
      },
      j009UsrPtjTmpDTO: {
        ...current.j009UsrPtjTmpDTO,
        ...partial.j009UsrPtjTmpDTO,
      },
      j010UsrRlTmPDTO: {
        ...current.j010UsrRlTmPDTO,
        ...partial.j010UsrRlTmPDTO,
      },
      j012UsrExctxnTmpDTO: {
        ...current.j012UsrExctxnTmpDTO,
        ...partial.j012UsrExctxnTmpDTO,
      },
      j026SupDocDTO: {
      ...current.j026SupDocDTO,
      ...partial.j026SupDocDTO,
    },
    };
  }


  getDraft(): HantarWujudIDPayload {
    return this.draftPayload ?? this.defaultDraft();
  }

  clearDraft(): void {
    this.draftPayload = null;
  }


}
