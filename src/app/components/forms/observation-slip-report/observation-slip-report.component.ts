import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-observation-slip-report',
  templateUrl: './observation-slip-report.component.html',
  styleUrls: ['./observation-slip-report.component.css']
})
export class ObservationSlipReportComponent implements OnInit {
  observationSlipReport:FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  }

}
