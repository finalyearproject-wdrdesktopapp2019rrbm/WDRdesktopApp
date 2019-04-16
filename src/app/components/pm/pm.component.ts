import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';


@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {
  userInfo:any;
  board: string;
  errorMessage: string;


  constructor(private userService: UserService) { }

  ngOnInit() {

      this.userService.getPMBoard().subscribe(
        data => {
          this.userInfo = {
            name: data.user.name,
            email:data.user.emal
          };
          this.board = data.description;
        },
        error => {
          this.errorMessage = `${error.status}:${error.error}`;
        }

      );
  }

}
