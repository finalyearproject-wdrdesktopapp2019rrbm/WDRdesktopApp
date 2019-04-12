import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/users';
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

  logout(){
    //remove user from localstorage to log user route
    localStorage.removeItem('currentUser');
  }
}
