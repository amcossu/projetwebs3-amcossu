import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  userData = {};
  constructor(private _auth: AuthService, private _router: Router,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._auth.getUserDetail(this._route.snapshot.params['id'])
    .subscribe(
      res => this.userData = res,
      err => console.log(err)
    );
  }

  updateUser() {
    this._auth.updateUser(this.userData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/users/' + res.token]);
        },
        err => console.log(err)
      );
  }

  deleteUser() {
    this._auth.deleteUser(this.userData)
      .subscribe(
        res => {
          console.log(res);
          this._router.navigate(['/home']);
        },
        err => console.log(err)
      );
  }
}
