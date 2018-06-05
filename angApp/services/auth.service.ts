import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class AuthService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _deleteUrl = 'http://localhost:3000/api/delete';

  constructor(private http: HttpClient, private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }
  deleteUser(userId) {
    const headers = new Headers;
    headers.append('userId', userId);
    const options = new RequestOptions();
    options.headers = headers;
    return this.http.delete(this._deleteUrl);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  updateUser(user) {

  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  getToken() {
    return localStorage.getItem('token');
}

}

