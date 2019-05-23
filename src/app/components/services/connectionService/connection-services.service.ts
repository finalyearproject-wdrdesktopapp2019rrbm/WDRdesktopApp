import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { BehaviorSubject, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionServiceService {

  public connected$ =  new BehaviorSubject<boolean>(false);
  private config = 'http://wimea.mak.ac.ug/wdr/wimeaDesktopApiconnect/insert.php';
  public connState: boolean;
  private source = interval(3000);
  constructor(private _http: HttpClient) { 
    this.source.subscribe(() => {
      this._http.get(this.config, { observe: 'response'})
      .pipe(first())
      .subscribe(resp => {
        if(resp.status === 200 ) {
          this.connected(true);
        }else{
          this.connected(false);
        }
      }), err => this.connected(false);
    });

    this.connected$.subscribe(connected => {
      console.log("connected: ", connected);
    });
    }

    connected(data: boolean) {
      this.connState = data;
      this.connected$.next(this.connState);
    }

}