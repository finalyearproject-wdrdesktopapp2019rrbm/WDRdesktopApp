// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Http, Headers, Response, RequestOptions} from '@angular/http';
// import { User } from '../../models/user/user.model';
// import { Task } from '../../models/task/task';
//
// import 'rxjs/Rx';
//
//
// @Injectable({
//   providedIn: 'root'
// })
// export class DataService {
//
//
//
//   //connect to api
//    apiURL= 'http://localhost:3000/';
//    api = 'http://localhost:3000/Tasks';
//
//   constructor(private http:HttpClient) { }
//
//   //retrieve users from database
//   getUsers(){
//     return this.http.get<User[]>(this.apiURL+'Users')
//   }
//
//   //get all
//   getAllTasks() {
//     return this.http.get(this.api)
//     .map((response: Response) => response.json());
//   }
//
//   deleteTask(item:Task){
//      let headers = new Headers({ 'Content-Type': 'application/json' });
//      let options = new RequestOptions({ headers: headers });
//
//      return this.http.delete(this.api+item.Id,options)
//      .map((response:Response)=>response.json());
//  }
//
//   getTaskId(Id:any){
//     return this.http.get(this.api+Id)
//      .map((response:Response)=>response.json());
//     }
//
//   editTask(item:Task) {
//     let body = JSON.stringify(item);
//     let headers = new Headers({ 'Content-Type': 'application/json'});
//     let options = new RequestOptions({ headers: headers });
//     return this.http.put(this.api+item.Id, body, options)
//     .map((response: Response) => response.json());
//   }
//
// }


import { Injectable } from '@angular/core';
import { Task } from '../../models/task/task';

import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class DataService {
  public url:string='http://localhost:3000/Tasks';

  constructor(private _http:Http) { }

    getAllTasks(){
          return this._http.get(this.url)
           .map((response:Response)=>response.json());
    }

    deleteTask(item:Task){
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          
          return this._http.delete(this.url+item.Id,options)
          .map((response:Response)=>response.json());
    }

    addTask(item:Task){

    let body = JSON.stringify(item);

    let headers = new Headers({ 'Content-Type': 'application/json' });

    let options = new RequestOptions({ headers: headers });

    return this._http.post(this.url,body, options)

    .map((response:Response)=>response.json());

    }

    getTaskId(id:any){

    return this._http.get(this.url+id)

    .map((response:Response)=>response.json());

    }

    editTask(item:Task){

    let body = JSON.stringify(item);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url+item.Id, body, options)
    .map((response:Response)=>response.json());

    }

}
