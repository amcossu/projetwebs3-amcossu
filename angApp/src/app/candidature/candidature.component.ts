import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../services/candidature.service';



@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})

export class CandidatureComponent implements OnInit {

  // array with all candidatures registered by an user
  candidatures = [];

  constructor(private _candidatureService: CandidatureService) { }

  // use the candidature service to get all the candidatures and return in json
  ngOnInit() {
    this._candidatureService.getCandidatures()
    .subscribe(
      res => {this.candidatures = res.json();
      },
      err => console.log(err)
    );
  }

}
