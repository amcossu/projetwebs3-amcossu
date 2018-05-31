import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css']
})
export class JobEditComponent implements OnInit {

  candidature = {
    'id': ''
  };


  constructor(private _jobsService: JobsService, private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._jobsService.getCandidatureDetail(this._route.snapshot.params['id'])
    .subscribe(
      res => this.candidature = res,
      err => console.log(err)
    );
  }

  modifyCandidature() {
    const id = localStorage.getItem('token');
    this.candidature.id = id;
    this._jobsService.updateCandidature(this.candidature)
    .subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/users/' + res.token]);
      },
      err => console.log(err)
    );
  }


}
