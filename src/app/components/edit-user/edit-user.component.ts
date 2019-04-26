import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../services/user/user.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user/user';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  uname ='kajs';
  submitted = false;
  editUser = new User(1, 'Kampala', 'thankU', 'heks', 'mike','pass',
  'Observer', 'k@gmail.com', '03284','n','yes','o', 'now','no','mik','hj');
  _angForm: FormGroup;
  userModel = new User(1, 'Kampala', 'thankU', 'heks', 'mike','pass',
  'Observer', 'k@gmail.com', '03284','n','yes','o', 'now','no','mik','hj');




  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {
      this.createForm();

    }


       createForm() {
        this._angForm = this.formBuilder.group({
            UserName: ['', Validators.required ],
            UserEmail: ['', Validators.required ]
          });
        }

  ngOnInit() {

    const userId = localStorage.getItem('editUserId');

    if(!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }

    // this.editForm = this.formBuilder.group({
    //   id: userId,
    //   username: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required]
    // });


    this.userService.getUserById(+userId).subscribe(data => {
      // this.editUser = data;
      this.uname = 'gtdd'
      console.log(this.editUser);
      // this.editUser.patchValue(data);
    }, err=>console.log(err));



    // this.email.setValue('ankit@appdividend.com')
    // this.uname.setValue('kams')
  }

  // get the form short name to access  the form field
  // get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    // this.userService.updateUser(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['users']);
    //     },
    //     error => {
    //       alert(error);
    //     });
  }

  ////


  updateUserDetails(UserName) {
    // const obj = {
    //   UserName: UserName

    // }
    // console.log('here');

  }





















}
