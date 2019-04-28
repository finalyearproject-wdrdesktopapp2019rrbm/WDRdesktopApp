import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { User } from '/components/models/user/user';
import {User } from '../components/models/user/user';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
 loggedInUser: User[] = [];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedinUser'));
    this.loggedInUser = loggedInUser;
  }

}
