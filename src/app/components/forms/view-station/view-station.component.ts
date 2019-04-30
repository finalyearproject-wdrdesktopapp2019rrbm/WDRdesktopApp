import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/allServices';
import {Router } from '@angular/router';
import {Station } from '../../models/station/station';

@Component({
  selector: 'app-view-station',
  templateUrl: './view-station.component.html',
  styleUrls: ['./view-station.component.css']
})
export class ViewStationComponent implements OnInit {
  // stations: Station[];
  stations: any = [];

  constructor(
  private router: Router,
  private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getStationDetails()
    .subscribe(data=>{
        this.stations = data.json();
            console.log(this.stations);
      });
  }


}
