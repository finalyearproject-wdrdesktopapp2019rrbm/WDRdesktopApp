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
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  // loginUser(event){
  //   event.preventDefault();
  //   console.log(event);
  // }

  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid) {
      return;
    }
    if(this.loginForm.controls.email.value == 'mic@gmail.com' && this.loginForm.controls.password.value == 'michael'){
      this.router.navigate(['users']);
    } else {
      this.invalidLogin = true;
    }
  }

}
