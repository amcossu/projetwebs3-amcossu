import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';



@Injectable()
export class JobsService {

  private _candidatureUrl = 'http://localhost:3000/api/candidatures';



  constructor(private http: HttpClient, private _router: Router, private _authService: AuthService) { }

  registerCandidatures(candidature) {
    candidature.userId = this._authService.getToken();
    return this.http.post<any>(this._candidatureUrl, candidature);
  }

  getCandidatures() {
    return this.http.get<any>(this._candidatureUrl);
  }

  updateCandidature(data) {
    return this.http.put<any>(this._candidatureUrl, data);
  }

  getCandidatureDetail(id) {
    return this.http.get<any>(this._candidatureUrl  + '/' + id);

  }

  deleteCandidature(id) {
    return this.http.delete<any>(this._candidatureUrl + '/' + id);
  }


}
