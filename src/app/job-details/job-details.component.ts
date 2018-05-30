import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  candidature = {};

  constructor(private _jobsService: JobsService, private _router: Router,  private http: HttpClient,
  private _route: ActivatedRoute) { }

  ngOnInit() {
    this._jobsService.getCandidatureDetail(this._route.snapshot.params['id'])
    .subscribe(
      res => this.candidature = res,
      err => console.log(err)
    );

  }

}
