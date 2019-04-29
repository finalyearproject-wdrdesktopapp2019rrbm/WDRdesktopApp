import { Component, OnInit, HostBinding} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from '../../services/AllServices';
@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  station: Station ={
                  stationName: '',
                  stationNumber: '',
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

  constructor() { }

  ngOnInit() {
  }

}
