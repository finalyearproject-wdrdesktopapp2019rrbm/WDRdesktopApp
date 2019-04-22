import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatamanagerComponent } from './components/datamanager/datamanager.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'register-users', component:  RegisterUsersComponent  },
  {path: 'users', component:  UsersComponent  },
  {path: 'edit-user', component:  EditUserComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
