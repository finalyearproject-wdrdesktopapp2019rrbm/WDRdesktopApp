import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-observation-slip-form',
  templateUrl: './observation-slip-form.component.html',
  styleUrls: ['./observation-slip-form.component.css']
})
export class ObservationSlipFormComponent implements OnInit {

observationSlipForm:FormGroup;

constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
  }

}
