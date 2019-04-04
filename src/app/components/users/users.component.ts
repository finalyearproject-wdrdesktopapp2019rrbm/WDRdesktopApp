import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { User } from '../models/user/user.model';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users$: User[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getUsers()
    .subscribe(data => this.users$ = data);
  }

}
