import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  jobs = [];
  constructor(private _jobsService: JobsService, private _router: Router) { }

  ngOnInit() {
    this._jobsService.getJobs()
    .subscribe (
      res => this._jobsService = res,
      err => {
        if (err instanceof  HttpErrorResponse) {
          if (err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      }
    );
  }

}
