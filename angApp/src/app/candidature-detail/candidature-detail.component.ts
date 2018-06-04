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

  candidature = {
      _id : String,
      job: String,
      company: String,
      offer_description: String,
      offer_code: String,
      contact: String,
      date: Date,
      userId: String,
      __v: Number
  };

  constructor(private _candidatureService: CandidatureService, private _router: Router,
    private _route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit() {
    this.candidature._id = this._route.snapshot.params['id'];
      this._candidatureService.getCandidatureDetail(this.candidature._id)
        .subscribe(
          res => { this.candidature = res.json();
          },
          err => console.log(err)
        );
      const userId = this.candidature.userId;
      const currentUserId = this._authService.getToken();
      console.log('userId', userId);
      console.log('currentUserId', currentUserId);
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

