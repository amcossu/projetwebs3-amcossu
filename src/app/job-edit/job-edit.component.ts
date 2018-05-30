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

  candidature: any = {};

  constructor(private _jobsService: JobsService, private _router: Router) { }

  ngOnInit() {
  }

  deleteCandidature(id) {
    this._jobsService.deleteCandidature(this.candidature)
      .subscribe(res => {
          this._router.navigate(['/candidatures']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  updateCandidature(id) {
    this._jobsService.updateCandidature(this.candidature, id)
      .subscribe(res => {
          const _id = res['id'];
          this._router.navigate(['/job-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
