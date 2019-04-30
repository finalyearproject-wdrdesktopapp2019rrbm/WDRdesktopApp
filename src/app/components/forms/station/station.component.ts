import { Component, OnInit, HostBinding} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {  Router } from '@angular/router';
import { DataService } from '../../services/allServices';
import {Station } from '../../models/station/station';
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
  submitted: boolean =  false;
  @HostBinding('class') classes = 'row';

  station: Station ={
                  stationName: '',
                  stationNumber: 0,
                  stationRegNumber: 0,
                  location: '',
                  indicator: '',
                  region: '',
                  country: '',
                  latitude: 0,
                  longitude: 0,
                  status: 'InActive',
                  stationType: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {}

  addStation(){
    this.submitted = true;
    this.dataService.createStation(this.station)
    .subscribe(res=>{
      console.log(res);
      this.router.navigate(['view-stations']);
    },
    err=> console.error(err));

  }



}
