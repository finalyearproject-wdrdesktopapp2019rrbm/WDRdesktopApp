import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { User } from '../models/user/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   user: User[] = [];

  constructor(private dataService: DataService ) {}

  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));
    this.user = loggedInUser;
  }

}
