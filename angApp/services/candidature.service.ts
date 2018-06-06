import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Http, Headers, RequestOptions } from '@angular/http';





@Injectable()
export class CandidatureService {

  private _candidatureUrl = 'http://localhost:3000/api/candidature';
  private _candidatureDetailUrl = 'http://localhost:3000/api/details';


  constructor(private http: HttpClient, private _router: Router, private _authService: AuthService,
              private _http: Http ) { }

  /* Register candidature */
  registerCandidatures(candidature) {
    candidature.userId = this._authService.getToken(); 
    return this.http.post<any>(this._candidatureUrl, candidature);
  }

  /* List all candidatures of a user */
  getCandidatures() {
    const userId = this._authService.getToken();
    const headers = new Headers();
    headers.append('userId', userId);
    const options = new RequestOptions();
    options.headers = headers;
    console.log(userId);
    return this._http.get(this._candidatureUrl, options);

  }

  /* Show a candidature */
  getCandidatureDetail(candidatureId) {
    const headers = new Headers();
    headers.append('candidatureId', candidatureId);
    const options = new RequestOptions();
    options.headers = headers;
    return this._http.get(this._candidatureDetailUrl, options);

  }

  updateCandidature(id, candidature) {
    const url = this._candidatureUrl + id;
    return this.http.put<any>(url, candidature);
  }

  deleteCandidature(id) {
    const url = this._candidatureUrl + '/' + id;
    return this.http.delete<any>(url);
  }
}
