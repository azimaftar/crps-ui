import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface MaklumatKakitangan {
  kpNo: number;
  name: string;
  docType: string;
  dob: string;
  age: number;
  gender: string;
  noBirthCert: string;
  birthState: string;
  natStat: string;
  natCountry: string;
  nation: string;
  etnic: string;
  bumiStat: string;
  rel: string;
  marStat: string;
  addr1: string;
  addr2: string;
  addr3: string;
  postcd: string;
  city: string;
  state: string;
  homeNo: string;
  offNo: string;
  offNoext: string;
  hpNo: string;
  email: string;
  stfCat: string;
  svsNo: string;

  svcs: {
    stfCat: string;
    pos: string;
    statPos: string;
    posLev: string;
    servGroup: string;
    gred: string;
    schCd: string;
    apptDt: string;
    strDt: string;
    stfSts: string;
    SalCd: string;
  }[];

  location: {
    div: string;
    stateLoc: string;
    brnch: string;
    unit: string;
    locStn: string;
    strDtLoc: string;
    locType: string;
    locdrtn: string;
    shftGrp: string;
  }[];

  academic: {
    instName: string;
    field: string;
    achv: string;
    instLoc: string;
    instYr: string;
    instYrEnd: string;
  }[];

  language: {
    lngType: string;
    sklWrt: string;
    sklOrl: string;
  }[];

  award: {
    awdsType: string;
    awdsDt: string;
    awdsTitle: string;
  }[];

  activity: {
    atvtType: string;
    atvtTypeGr: string;
    atvtPos: string;
    atvtAch: string;
  }[];

  asset: {
    astsType: string | null;
    astsDet: string | null;
    astsDt: string;
    astsSrc: string;
    astsVal: string | null;
    astsEst: string | null;
    astsAddr: string | null;
    astsNts: string | null;
  }[];

  bank: {
    bnksName: string;
    acctType: string;
    acctNo: string;
  }[];

  family: {
    famName: string;
    famKpNo: string;
    famDob: string;
    famType: string;
  }[];

  uform: {
    uformsTp: string | null;
    uformsItm: string | null;
    uformsQty: string | null;
    uformsMsTp: string | null;
    uformsMsr: string | null;
  }[];

  n013VaccDet: {
    vaccId: string;
    vaccineName: string | null;
    startDate: string | null;
    endDate: string | null;
  }[];

  ttdpma: {
    ownerId: string;
    passbookType: string | null;
    docNo: string | null;
    applyDate: string | null;
    effectiveDate: string | null;
    expiryDate: string | null;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // production true use wso api, false use localhost
  private apiUrl = environment.production
    ? '/adm-services/v1/ADM'
    : 'http://localhost:8080/ADM';

  constructor(private http: HttpClient) {}

  getMaklumatKakitangan(kpNo: string): Observable<MaklumatKakitangan> {
    return this.http.get<MaklumatKakitangan>(
      `${this.apiUrl}/getMaklumatKakitangan?kpNo=${kpNo}`
    );
  }

  getTandatanganDigital(kpNo: string): Observable<MaklumatKakitangan> {
    return this.http.get<MaklumatKakitangan>(
      `${this.apiUrl}/getTandatanganDigital?kpNo=${kpNo}`
    );
  }

  postTandatanganDigitalBlob(kpNo: String, digitalSignaturePng: FormData): Observable<MaklumatKakitangan> {
    return this.http.post<MaklumatKakitangan>(`${this.apiUrl}/postTandatanganDigitalBlob?kpNo=${kpNo}`,digitalSignaturePng);
  }
}
