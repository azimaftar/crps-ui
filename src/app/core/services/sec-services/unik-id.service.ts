import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UnikIDService {

  private apiUrlABIS = environment.production ? '/bkp-servicess/v1/ABIS' : 'http://localhost:8081/ABIS';

  constructor(private http: HttpClient) {}

  getTesting(): Observable<{ message: string }> {
  return this.http.get<{ message: string }>(`${this.apiUrlABIS}/testing`);
}

}
