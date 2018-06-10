import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loginUserData = {
    email: '',
    password: '',
    _id: '',
  };

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  deleteAccount() {
    const userId = localStorage.getItem('token');
    this._auth.deleteUser(userId).
    subscribe(
      res => {
        console.log(res),
        this._router.navigate(['/home']);
      },
      err => console.log(err)
    );
}
}
