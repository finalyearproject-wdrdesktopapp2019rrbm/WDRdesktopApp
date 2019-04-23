import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-archive-observation-slip-form-data',
  templateUrl: './archive-observation-slip-form-data.component.html',
  styleUrls: ['./archive-observation-slip-form-data.component.css']
})
export class ArchiveObservationSlipFormDataComponent implements OnInit {
  archiveObservationSlipFormData:FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
  }

}
