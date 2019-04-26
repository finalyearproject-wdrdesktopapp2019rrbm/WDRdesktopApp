import { Injectable } from '@angular/core';
import {Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = 'http://localhost:3000/users/authenticate';

  constructor(private http:Http) { }

  getUserDetails(){
    //post to httpclient and display user details
  }

  loginUser(user){
    // console.log(user)
    // return this.http.post<any>(this._loginUrl, user);
    return this.http.post(this._loginUrl, user);
  }
}
