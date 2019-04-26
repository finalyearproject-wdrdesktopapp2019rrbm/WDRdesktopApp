import { Component, OnInit, HostBinding} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../services/user/user.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import {User }  from '../models/user/user';


@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean = false;

  @HostBinding('class') classes ='row';

  user: User = {
    Userid:0,
    station:'',
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
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }



  ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      console.log(params);
    // this.addForm = this.formBuilder.group({
    //   fname: ['', Validators.required],
    //   sname: ['', Validators.required],
    //   uname: ['', Validators.required],
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    //   uRole: ['', Validators.required],
    //   phone: ['', Validators.required],
    // });
  }

  onSubmit(){
    delete this.user.Userid;
    delete this.user.Active;
    this.submitted = true;
    this.userService.createUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['users']);
      },
      err => console.error(err)
    )
    // if(this.addForm){
    //   console.log(this.addForm);
    //   this.userService.createUser(this.addForm.value)
    //   .subscribe( data => {
    //     this.router.navigate(['users']);
    //   })
    //
    //
    // }else{
    //   alert('fill fields');
    // }

  }


}
