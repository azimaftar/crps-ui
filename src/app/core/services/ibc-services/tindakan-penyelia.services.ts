import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TindakanPenyeliaServices {
  constructor(private http: HttpClient) {}

  postTindakanPenyelia(modelToSend: any) {
    let url = 'http://localhost:8080/api/v1/ibc/tindakanPenyelia';
    return this.http.post<any>(url, modelToSend, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
