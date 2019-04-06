import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {
  baseUrl:string='http:localhost:3000/';
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User[]>(this.baseUrl + 'Users');
  }
  getuserById(id:number) {
    return this.http.get<User[]>(this.baseUrl + id);
  }

  createUser(user:User) {
    return this.http.post(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.put(this.baseUrl + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + id);

  }

}
