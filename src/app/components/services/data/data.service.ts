import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Response, RequestOptions} from '@angular/http';
import { User } from '../../models/user/user.model';
import { Task } from '../../models/task/task';

import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  //connect to api
   apiURL= 'http://localhost:3000/';
   api = 'http://localhost:3000/Tasks';

  constructor(private http:HttpClient) { }

  //retrieve users from database
  getUsers(){
    return this.http.get<User[]>(this.apiURL+'Users')
  }

  //get all
  getAllTasks() {
    return this.http.get(this.api)
    .map((response: Response) => response.json());
  }

  //delete
  deleteTask(item: Task) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.delete(this.api+item.Id, options)
    .map((response:Response) => response.json());
  }

  // getTaskId(Id:any) {
  //   return this.http.get(this.api+Id)
  //    .map((response.Response) => response.json());
  // }
  getTaskId(Id:any){
    return this.http.get(this.api+Id)
     .map((response:Response)=>response.json());
    }

  editTask(item:Task) {
    let body = JSON.stringify(item);
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.api+item.Id, body, options)
    .map((response: Response) => response.json());
  }

}
