import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../services/candidature.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-candidature-edit',
  templateUrl: './candidature-edit.component.html',
  styleUrls: ['./candidature-edit.component.css']
})
export class CandidatureEditComponent implements OnInit {

  candidature: any = {};

  constructor(private _candidatureService: CandidatureService, private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._candidatureService.getCandidatureDetail(this._route.snapshot.params['id'])
    .subscribe(
      res => this.candidature = res,
      err => console.log(err)
    );
  }

  modifyCandidature(id, data) {
    this._candidatureService.updateCandidature(id, data)
      .subscribe(res => {
          id = res['_id'];
          this._router.navigate(['/candidature-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
}

}
