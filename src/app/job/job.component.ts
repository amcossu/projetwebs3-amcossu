import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  candidatures = [] ;
  constructor(private _jobsService: JobsService, private _router: Router, private http: HttpClient) { }

  ngOnInit() {
   this._jobsService.getCandidatures()
   .subscribe(
     res => this.candidatures = res,
     err => console.log(err)
   );
  }

}
