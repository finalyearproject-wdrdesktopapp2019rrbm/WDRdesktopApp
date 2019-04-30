import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-observationslipforms',
  templateUrl: './view-observationslipforms.component.html',
  styleUrls: ['./view-observationslipforms.component.css']
})
export class ViewObservationslipformsComponent implements OnInit {
    observationslips: any = [];
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllObservationslips()
    .subscribe( data => {
      this.observationslips = data.json();
      console.log(this.observationslips);
    });


  }

}
