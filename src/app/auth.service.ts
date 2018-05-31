import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

  private _userURL = 'http://localhost:3000/api/users';
  private _user2URL = 'http://localhost:3000/api/users/';

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._userURL, user);
  }

  getUserDetail(id) {
    return this.http.get<any>(this._user2URL + id);
  }

  deleteUser(id) {
    return this.http.delete<any>(this._user2URL + id);
  }

  loginUser(user) {
    return this.http.post<any>(this._userURL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  updateUser(user) {
    return this.http.post<any>(this._user2URL, user);
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
