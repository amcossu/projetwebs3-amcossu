import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../../../services/candidature.service';



@Component({
  selector: 'app-candidature',
  templateUrl: './candidature.component.html',
  styleUrls: ['./candidature.component.css']
})

export class CandidatureComponent implements OnInit {

  candidatures = [];
  constructor(private _candidatureService: CandidatureService) { }

  ngOnInit() {
    this._candidatureService.getCandidatures()
    .subscribe(
      res => {this.candidatures = res.json();
       console.log(this.candidatures);
      },
      err => console.log(err)
    );
  }

}
