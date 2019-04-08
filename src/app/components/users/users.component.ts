import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { User } from '../models/user/user.model';
import {Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: User[];
    // _users: User[];
  constructor(private router: Router, private userService: UserService, private dataService: DataService) { }

  ngOnInit() {
  //option one to return use data
    // return this.dataService.getUsers()
    // .subscribe(data => this.users$ = data);

    //option two
    this.userService.getUsers()
    .subscribe( data => {
      this.users = data;
    });

  }

  // deleteUser
  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
    .subscribe( data => {
      // this.users = this.users.filter( u => u !== user);
      this.users = this.users.filter( u => u !== user);
    })
  };

  //edit user details
  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    // localStorage.setItem("editUserId", user.id.toString());
    let userID = user.id.toString();
    localStorage.setItem("editUserId", userID);
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['register-users']);
  }

}
