import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {JwtResponse  } from './jwt-response';
import { AuthLoginInfo  } from './login-info';
import { SignUpInfo } from './signUp-info';


const httpOptions= {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private baseUrl = 'http://localhost:3000/users';
  // private signupUrl = 'http://localhost:8080/api';
   private loginUrl = 'http://localhost:8080/api/auth/signin';
   private signUpUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    console.log(username + password);
    let data = {username: username, password: password }
    return this.http.post<any>(this.baseUrl +`/authenticate`, data)
    .pipe(map(user => {
      //login successful if there's a jwt token in the response
      if(user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions)
  }

  signUp(info: SignUpInfo): Observable<string>  {
    return this.http.post<string>(this.signUpUrl, info, httpOptions);
  }

  logout(){
    //remove user from localstorage to log user route
    localStorage.removeItem('currentUser');
  }
}
