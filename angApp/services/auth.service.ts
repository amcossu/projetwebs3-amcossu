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

  /* save user in the database */
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  /* send data from user to login */
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  /* delete user */
  deleteUser(userId) {
    const headers = new Headers;
    headers.append('userId', userId); // append a new value or create an header
    const options = new RequestOptions();
    options.headers = headers;
    return this.http.delete(this._deleteUrl);
  }

  /* check if there is a token in local storage */
  loggedIn() {
    return !!localStorage.getItem('token');
  }

   /* function that returns the token at local storage */
   getToken() {
    return localStorage.getItem('token');
  }

  /* remove token to logout the user and return to home page */
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

}

