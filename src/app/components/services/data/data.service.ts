import { Injectable } from '@angular/core';
import { Station } from '../../models/station/station';
import { Observationslip } from '../../models/observationslip/observationslip';


import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';


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
  constructor(private _http: Http) {
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
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      // console.log(observationslip);
      return this._http.post(this.wimeaOnlineApi, body, options)
      .map((response: Response) => response.json());
    

    }



}
