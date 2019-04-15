import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { User } from '../models/user/user.model';
import {Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users: User[];
    // @ViewChild(MatPaginator) paginator : MatPaginator;

  constructor(private router: Router, private userService: UserService, private dataService: DataService) { }

  ngOnInit() {


    //option two
    this.userService.getUsers()
    .subscribe( data => {
      this.users = data;
    });

    // this.users.paginator = this.paginator;

  }

  // deleteUser
  deleteUser(user: User): void {
    this.userService.deleteUser(user.Userid)
    .subscribe( data => {
      // this.users = this.users.filter( u => u !== user);
      this.users = this.users.filter( u => u !== user);
    })
  };

  //edit user details
  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    let userID = user.Userid.toString();
    localStorage.setItem("editUserId", userID);
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['register-users']);
  }

}
