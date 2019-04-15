import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  { User } from '../../models/user/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserService {
   private baseUrl = 'http://localhost:3000/users';
   private userURL = 'http://localhost:8080/api/test/user';
   private pmURL = 'http://localhost:8080/api/test/pm';
   private adminURL = 'http://localhost:8080/api/test/admin';

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


  //test
  getUserBoard(): Observable<any> {
    return this.http.get(this.userURL);
  }
  getPMBoard(): Observable<any> {
    return this.http.get(this.pmURL);
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(this.userURL);
  }

}
