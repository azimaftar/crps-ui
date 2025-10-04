import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaklumatPengembaraServicesService {
  private apiUrl = 'http://localhost:8080/api/v1/ibc/maklumatPengembara';

  public semakResponseData: any; //hold result temporarily


  constructor(private http: HttpClient) { }

  //send GET method
  semakMaklumatPengembara(formData: any) {
    const params = new HttpParams()
      .set('visitorType', formData.visitorType)
      .set('docType', formData.docType)
      .set('docNo', formData.docNo)
      .set('kpNo', formData.kpNo)
      .set('nationality', formData.nationality);

    
    //update with new api later 
    return this.http.get(`${this.apiUrl}/GET/getMaklumatPengembara`, { params });
  }

  //set response in 02.1.1-10
  setSemakResponse(response: any) {
    this.semakResponseData = response;
  }

  //get response in 02.1.1-11 
  getSemakResponse() {
    return this.semakResponseData;
  }

}
