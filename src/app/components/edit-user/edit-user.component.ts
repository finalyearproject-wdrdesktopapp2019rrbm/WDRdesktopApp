import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from '../services/user/user.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user/user.model';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) { }

  ngOnInit() {
    const userId = localStorage.getItem('editUserId');
    if(!userId) {
      alert('Invalid action.');
      this.router.navigate(['list-user']);
      return;
    }
    console.log('user data');
    this.editForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });


    this.userService.getUserById(+userId).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);

    });


  }

  // get the form short name to access  the form field
  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    // this.userService.updateUser(this.editForm.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate(['list-user']);
    //     },
    //     error => {
    //       alert(error);
    //     });

    if(this.editForm.valid){
      this.userService.updateUser(this.editForm.value)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['users']);
      });

    }
  }

}
