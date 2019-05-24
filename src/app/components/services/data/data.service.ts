import { Injectable } from '@angular/core';
import { Station } from '../../models/station/station';
import { Observationslip } from '../../models/observationslip/observationslip';


import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { ConnectionServiceService } from '../allServices';


@Injectable()

export class DataService {

  public url:string='http://localhost:3000/Tasks';
  public formsUrl:string='http://localhost:3000/forms';
  public stationsUrl:string='http://localhost:3000/stations';
  // private wimeaOnlineURL:string='http://wimea.mak.ac.ug/wdr/ionic_login/wimeaAppconnect/insert.php';
  private wimeaOnlineApi:string='http://wimea.mak.ac.ug/wdr/wimeaDesktopApiconnect/insert.php';
  private wimeaOfflineURL:string='http://localhost/ionic_login/wimeaDesktopApiconnect/insert.php';
  private connectionStatus;


  constructor(private _http: Http, private conn: ConnectionServiceService) {

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


    //save observationslip offline
    createObservationslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
        // console.log(observationslip);
        return this._http.post(this.formsUrl, body, options)
      .map((response: Response) => response.json());

    }

    // update sync status
    updateSyncStatus(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
        // console.log(observationslip);
        return this._http.put(this.formsUrl+'/updateSyncStatus', body, options)
      .map((response: Response) => response.json());

    }


    //save observationslip online
    syncObservationslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
        // console.log(observationslip);
       // check if internet is on
      // var v = this.conn.connected$;
      // this.connectionStatus = v.value;
      // alert(this.connectionStatus);
      // if(this.connectionStatus){
        // console.log(this.connectionStatus);
        return this._http.post(this.wimeaOnlineApi, body, options)
      .map((response: Response) => response.json());

      // return this._http.post(this.wimeaOfflineURL, body, options)
      // .map((response: Response) => response.json());

      // }else{
      //   console.log(this.connectionStatus);

      // }
    }




}
