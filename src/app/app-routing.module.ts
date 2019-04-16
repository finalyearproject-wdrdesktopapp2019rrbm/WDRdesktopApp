import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PmComponent } from './components/pm/pm.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'pm',
    component:PmComponent
  },
  {
    path: 'admin',
    component:AdminComponent
  },
  {
    path: 'auth/login',
    component:LoginComponent
  },
  {
    path: 'signup',
    component:RegisterUsersComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
