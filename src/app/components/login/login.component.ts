import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthService } from "../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
   invalidLogin: boolean = false;

  constructor(private formBuilder:  FormBuilder, private router: Router, private auhService: AuthService) { }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.username.value == 'test' && this.loginForm.controls.password.value == 'test'){
      this.router.navigate(['main-nav']);
    } else {
      this.invalidLogin = true;
    }
  }

}
