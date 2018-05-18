import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateUserData = {};
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  updateUser() {
    this._auth.updateUser(this.updateUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      );
  }
}
