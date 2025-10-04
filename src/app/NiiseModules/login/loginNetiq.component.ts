import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { environment } from "../../../environments/environment";


@Component({
    selector: 'app-login',
    template: ''
})
export class LoginNetiqComponent implements OnInit {
    constructor(private http: HttpClient) { }

    ngOnInit() {
        window.location.href = `${environment.apiIdmBaseUrl}/login`;
    }
}
