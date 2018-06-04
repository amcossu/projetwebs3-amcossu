import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../services/candidature.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-candidature-create',
  templateUrl: './candidature-create.component.html',
  styleUrls: ['./candidature-create.component.css']
})
export class CandidatureCreateComponent implements OnInit {

  candidature = {};

  constructor(private _candidatureService: CandidatureService, private _router: Router) { }

  ngOnInit() {
  }


  saveJob() {
    this._candidatureService.registerCandidatures(this.candidature)
    .subscribe(
      res => {
        console.log(res);
        this._router.navigate(['/candidatures']);
      },
      err => console.log(err)
    );
  }
}

