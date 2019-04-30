import { Injectable } from '@angular/core';
import { Task } from '../../models/task/task';
import { Station } from '../../models/station/station';

import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class DataService {
  public url:string='http://localhost:3000/Tasks';
  public formsUrl:string='http://localhost:3000/forms';
  public stationsUrl:string='http://localhost:3000/stations';

  constructor(private _http: Http) { }
  // STATION
      //add a station
      createStation(station: Station){
        let body = JSON.stringify(station);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this.stationsUrl, body, options)
        .map((response: Response) => response.json());
      }

      getStationDetails(){
        return this._http.get(this.stationsUrl);
      }



  //OBSERVATIONSLIP

    getAllObservationslips(){
      return this._http.get(this.formsUrl);
    }

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
