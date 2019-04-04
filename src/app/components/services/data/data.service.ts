import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user/user.model';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  //connect to api
   apiURL= 'http://localhost:3000/';
  constructor(private http:HttpClient) { }

  //retrieve users from database
  getUsers(){
    return this.http.get<User[]>(this.apiURL+'Users')
  }

}
