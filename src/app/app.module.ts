import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import {ReactiveFormsModule} from "@angular/forms";

//services
import { DataService } from './components/services/data/data.service';

//guards
import { AuthGuard } from './components/guard/auth.guard';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatamanagerComponent } from './components/datamanager/datamanager.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUsersComponent,
    UsersComponent,
    DashboardComponent,
    DatamanagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule ,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {path: 'login', component:  LoginComponent  },
        {path: 'datamanager', component:  DatamanagerComponent  },
        {path: 'dashboard', component:  DashboardComponent, canActivate: [AuthGuard] },
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
  providers: [DataService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
