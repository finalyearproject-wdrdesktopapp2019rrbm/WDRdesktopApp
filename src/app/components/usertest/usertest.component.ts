import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-usertest',
  templateUrl: './usertest.component.html',
  styleUrls: ['./usertest.component.css']
})
export class UsertestComponent implements OnInit {
  testForm:FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
