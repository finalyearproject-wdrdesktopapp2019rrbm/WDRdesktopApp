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
   loginData: any ={}

  constructor(private formBuilder:  FormBuilder, private router: Router, private authService: AuthService) { }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.loginUser(this.loginForm.value)
    .subscribe(  data => {
      const user = data.json();
      if ( user.length > 0) {
        this.router.navigate(['home']);

      } else {
        this.invalidLogin = true;

      }


    });
  }

}
