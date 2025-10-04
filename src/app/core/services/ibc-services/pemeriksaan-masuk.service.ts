import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PemeriksaanMasukService {

  constructor() { }

  postPengesahanBiometrik(requestData: any): Observable<any> {
    // Always return the same dummy response
    return of({
      mfid: "F123456789",
      finNo: "10140121509111732240080",
      visitorType: "1",
      docType: "501",
      docNo: "A1234567",
      docInd: "A",
      kpNo: "900101145678",
      kpType: "601",
      kpInd: "A",
      name: "JOHN DOE",
      issueDatePassport: "20200515",
      expiryDate: "20300514",
      nationality: "MYS",
      countryIssue: "MYS",
      dob: "19900101",
      gender: "1",
      printedName: "JOHN DOE",
      email: "johndoe@gmail.com",
      resultSuccCd: "00",
      resultErrCd: null
    });
  }

  postPengecualianBiometrik(requestData: any): Observable<any> {
    // Always return the same dummy response
    return of({
      mfid: "F123456789",
      visitorType: "1",
      docType: "501",
      docNo: "A1234567",
      docInd: "A",
      kpNo: "900101145678",
      kpType: "601",
      kpInd: "A",
      name: "JOHN DOE",
      issueDatePassport: "20200515",
      expiryDate: "20300514",
      nationality: "MYS",
      countryIssue: "MYS",
      dob: "19900101",
      gender: "1",
      printedName: "JOHN DOE",
      email: "johndoe@gmail.com",
      resultSuccCd: "00",
      resultErrCd: null
    });
  }
}
