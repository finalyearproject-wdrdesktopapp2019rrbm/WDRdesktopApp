import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { User } from '../models/user/user';
import {AuthService, AlertService } from '../services/allServices';

// import {AuthService } from "../services/auth/auth.service";


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
   user: any = {};
   returnUrl= '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService ) { }



  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/main-nav';
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.loginUser(this.loginForm.value)
    .subscribe(  data => {
      this.user = data.json();
      console.log(this.user)
     
      if ( this.user.length > 0) {
      
        console.log(this.user.length);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('loggedinUser', JSON.stringify(this.user));
        this.router.navigate([this.returnUrl]);
      
      } else {
        this.invalidLogin = true;
      
      }
    });
  }



}
