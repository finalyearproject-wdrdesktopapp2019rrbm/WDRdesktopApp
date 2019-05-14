import { Component, OnInit, HostBinding} from '@angular/core';
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
  @HostBinding('class') classes ='row';

  user: User = {
    Userid:0,
    station:'1',
    FirstName: '',
    SurName: '',
    UserName: '',
    UserEmail: '',
    UserPassword: '',
    UserRole: '',
    UserPhone: '',
    Active:  '',
    LoggedOn: '',
    Reset: '',
    LastPasswdChange: '',
    LastLoggedIn: '',
    CreatedBy: '',
    CreationDate: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {
      // this.createForm();

    }


       // createForm() {
       //  this._angForm = this.formBuilder.group({
       //      UserName: ['', Validators.required ],
       //      UserEmail: ['', Validators.required ]
       //    });
       //  }

  ngOnInit() {

    const userId = JSON.parse(localStorage.getItem('editUserId'));
    // const param = this.route.snapshot.paramMap.get('id');

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


    this.userService.getUserById(+userId)
    .subscribe(data => {

      console.log(data);
      // this.User =  data;
      // this.User.patchValue(data);
      // (userData: UserData) => this.displayUser(user),
      // (error: any)=> this.errorMessage = <any>error
    }, err=>console.log(err));



    // this.email.setValue('ankit@appdividend.com')
    // this.uname.setValue('kams')
  }

  // get the form short name to access  the form field
  // get f() { return this.editForm.controls; }

  onSubmit() {
    // this.submitted = true;
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
