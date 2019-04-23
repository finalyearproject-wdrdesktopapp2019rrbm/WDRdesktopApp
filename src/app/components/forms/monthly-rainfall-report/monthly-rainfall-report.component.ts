import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-monthly-rainfall-report',
  templateUrl: './monthly-rainfall-report.component.html',
  styleUrls: ['./monthly-rainfall-report.component.css']
})
export class MonthlyRainfallReportComponent implements OnInit {
  monthlyRainfallReport:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
