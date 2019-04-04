import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//services
import { DataService } from './components/services/data/data.service';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUsersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'login', component:  LoginComponent  },
        {path: 'register-users', component:  RegisterUsersComponent  },
        {path: 'users', component:  UsersComponent  },
        {path: '', component:  HomeComponent  }

      ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
