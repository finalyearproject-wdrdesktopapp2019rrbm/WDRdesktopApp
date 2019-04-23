import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user: any = {};
  angForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
      this.createForm();
    }

    createForm() {
   this.angForm = this.formBuilder.group({
       UserName: ['', Validators.required ]
   })
 }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.userService.getUserById(params['id']).subscribe(res => {
          this.user = res;
          console.log(this.user);
      });
    });
  }


}
