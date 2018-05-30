import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class JobsService {

  private _candidatureUrl = 'http://localhost:3000/api/candidature';



  constructor(private http: HttpClient, private _router: Router ) { }

  registerCandidatures(candidature) {
    return this.http.post<any>(this._candidatureUrl, candidature);
  }

  getCandidatures() {
    return this.http.get<any>(this._candidatureUrl);
  }

  updateCandidature(id, candidature) {
    const url = this._candidatureUrl + id;
    return this.http.put<any>(url, candidature);
  }

  getCandidatureDetail(id) {
    return this.http.get<any>(this._candidatureUrl + '/' + id);

  }

  deleteCandidature(id) {
    return this.http.delete<any>(this._candidatureUrl);
  }


}
