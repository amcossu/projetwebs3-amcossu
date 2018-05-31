import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable()
export class AuthService {

  private _loginURL = 'http://localhost:3000/api/login';
  private _registerURL = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }

  getUserDetail(id) {
    return this.http.get<any>(this._registerURL + id);
  }

  deleteUser(id) {
    return this.http.delete<any>(this._registerURL + id);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginURL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  updateUser(user) {
    return this.http.post<any>(this._registerURL, user);
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
