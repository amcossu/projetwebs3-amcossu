import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CandidatureService } from '../../../services/candidature.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-candidature-detail',
  templateUrl: './candidature-detail.component.html',
  styleUrls: ['./candidature-detail.component.css']
})
export class CandidatureDetailComponent implements OnInit {

  candidature: any = {};

  constructor(private _candidatureService: CandidatureService, private _router: Router,
    private _route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit() {
    this.candidature._id = this._route.snapshot.params['id'];
      this._candidatureService.getCandidatureDetail(this.candidature._id)
        .subscribe(
          res =>  this.candidature = res,
          err => console.log(err)
        );
  }

  deleteCandidature() {
    this._candidatureService.deleteCandidature(this.candidature)
      .subscribe(res => {
          this._router.navigate(['/candidatures']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

