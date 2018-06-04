import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {

  candidature = {};

  constructor(private _jobsService: JobsService, private _router: Router) { }

  ngOnInit() {

  }

  saveJob() {
    this._jobsService.registerCandidatures(this.candidature)
    .subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/user' + '/']);
      },
      err => console.log(err)
    );
  }

}
