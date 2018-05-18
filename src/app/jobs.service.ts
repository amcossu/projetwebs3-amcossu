import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobsService {

  private _jobsUrl = 'http://localhost:3000/api/jobs';

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get<any>(this._jobsUrl);
  }

}
