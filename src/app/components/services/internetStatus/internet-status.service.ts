import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import { ObservationSlipFormComponent } from '../../forms/observation-slip-form/observation-slip-form.component';

@Injectable({
  providedIn: 'root'
})
export class InternetStatusService {
  status = 'ONLINE';
  isConnected = true;

  constructor(private connectionService: ConnectionService) {

   }

   check(){
     this.connectionService.monitor().subscribe(isConnected => {
       this.isConnected =  isConnected;
       if(this.isConnected){
         this.status = "ONLINE";
       } else {
         this.status = "OFFLINE";
       }

       console.log(this.status);
       alert(this.status);
       return 'here';

     })
   }


}
