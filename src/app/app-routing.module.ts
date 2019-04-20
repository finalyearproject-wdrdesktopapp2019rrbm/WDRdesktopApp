import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {path: '', redirectTo:'/users', pathMatch:'full'},
  {path: 'users', component:  UsersComponent  },
  {path:'allTask', component:TasksComponent},
  {path:'main-nav', component:MainNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
