import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../services/user/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { SignUpInfo } from '../services/auth/signUp-info';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})

export class RegisterUsersComponent implements OnInit {
    form: any = {};

    signUpInfo: SignUpInfo;
    isSignedUp = false;
    isSignUpFailed = false;
    errorMessage = '';

  constructor(
     private formBuilder: FormBuilder,
     private router: Router,
     private userService: UserService,
     private authService: AuthService

   ) { }

  // addForm: FormGroup;

  ngOnInit() {

    // this.addForm = this.formBuilder.group({
    //   id: [],
    //   firstname: ['', Validators.required],
    //   username: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });
  }

  onSubmit(){
      // this.userService.createUser(this.addForm.value)
      // .subscribe( data => {
      //   this.router.navigate(['users']);
      // })
      console.log(this.form);

        this.signUpInfo = new SignUpInfo (
        this.form.name,
        this.form.username,
        this.form.email,
        this.form.password
      );

      this.authService.signUp(this.signUpInfo).subscribe (
        data => {
          console.log(data);
          this.isSignedUp = true;
          this.isSignUpFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error;
          this.isSignUpFailed = true;

        }
      );
  }
}
