import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {
   baseUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl)
  }


  getUserById(id:number) {
    return this.http.get<User[]>(this.baseUrl + '/'+ id);
  }

  createUser(user:User) {
     console.log(user);
     return this.http.post(this.baseUrl,  user);
  }

  updateUser(user: User) {
    alert(user);
    return this.http.put(this.baseUrl + '/' + user.Userid, user);
  }



  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);

  }

}
