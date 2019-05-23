import { Injectable } from '@angular/core';
import { Task } from '../../models/task/task';
import { Station } from '../../models/station/station';
import { Observationslip } from '../../models/observationslip/observationslip';


import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { ConnectionService } from 'ng-connection-service';


@Injectable()

export class DataService {

  status = 'OFFLINE';
  isConnected = false;
  public url:string='http://localhost:3000/Tasks';
  public formsUrl:string='http://localhost:3000/forms';
  public stationsUrl:string='http://localhost:3000/stations';
  // private wimeaOnlineURL:string='http://wimea.mak.ac.ug/wdr/ionic_login/wimeaAppconnect/insert.php';
  private wimeaOnlineApi:string='http://wimea.mak.ac.ug/wdr/wimeaDesktopApiconnect/insert.php';
  private wimeaOfflineURL:string='http://localhost/ionic_login/wimeaDesktopApiconnect/insert.php';
  private testUrl:string = 'http://www.google.com';
  constructor(private _http: Http,   private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "ONLINE";
      }
      else {
        this.status = "OFFLINE";
      }
      // console.log(this.status);
      // alert(this.status);
    });
    // console.log(this.isConnected);
    // console.log(this.status);

   }
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
    countSyncObservationslips(){
      return this._http.get(this.formsUrl+'/count');
    }

    // createObservationslip(observationslip: Observationslip){
    //   let body = JSON.stringify(observationslip);
    //   let headers = new Headers({ 'Content-Type': 'application/json'});
    //   let options = new RequestOptions({ headers: headers });
    //
      // return this._http.post(this.formsUrl, body, options)
      // .map((response: Response) => response.json());
    //
    // }

    createObservationslip(observationslip: Observationslip){
      console.log(this.status);
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      // console.log(observationslip);

      if(this.status == "ONLINE"){
      return this._http.post(this.wimeaOnlineApi, body, options)
      .map((response: Response) => response.json());
    }else{
      return this._http.post(this.formsUrl, body, options)
      .map((response: Response) => response.json());

    }

    }



}
