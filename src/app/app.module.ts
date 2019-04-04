import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';


//services
import { DataService } from './components/services/data/data.service';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUsersComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule ,
    RouterModule.forRoot(
      [
        {path: 'login', component:  LoginComponent  },
        {path: 'dashboard', component:  DashboardComponent  },
        {path: 'register-users', component:  RegisterUsersComponent  },
        {path: 'users', component:  UsersComponent  },
        {path: '', component:  HomeComponent  }

      ]),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
