import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatGridListModule,  MatCardModule,  MatMenuModule,  MatIconModule,  MatButtonModule,  MatDialogModule,  MatInputModule,  MatTableModule,  MatToolbarModule,  MatSidenavModule ,MatPaginatorModule  } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//services
import { DataService } from './components/services/data/data.service';
import { UserService } from './components/services/user/user.service';

//guards
import { AuthGuard } from './components/guard/auth.guard';


//interceptor
import { AuthInterceptor  } from './components/services/auth/auth-interceptor';
//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatamanagerComponent } from './components/datamanager/datamanager.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ObservationslipComponent } from './components/forms/observationslip/observationslip.component';
import { StationComponent } from './components/forms/station/station.component';
import { ElementsComponent } from './components/forms/elements/elements.component';
import { InstrumentsComponent } from './components/forms/instruments/instruments.component';
import { ArchiveObservationslipComponent } from './components/archiveForm/archive-observationslip/archive-observationslip.component';
import { ArchivemonthlyrainfallformreportdataComponent } from './components/archiveForm/archivemonthlyrainfallformreportdata/archivemonthlyrainfallformreportdata.component';
import { ArchivedekadalformreportdataComponent } from './components/archiveForm/archivedekadalformreportdata/archivedekadalformreportdata.component';
import { PmComponent } from './components/pm/pm.component';
import { AdminComponent } from './components/admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterUsersComponent,
    UsersComponent,
    DashboardComponent,
    DatamanagerComponent,
    EditUserComponent,
    MainNavComponent,
    ObservationslipComponent,
    StationComponent,
    ElementsComponent,
    InstrumentsComponent,
    ArchiveObservationslipComponent,
    ArchivemonthlyrainfallformreportdataComponent,
    ArchivedekadalformreportdataComponent,
    PmComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule ,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatPaginatorModule,
    FormsModule,
    RouterModule.forRoot(
      [

        // {path: 'datamanager', component:  DatamanagerComponent  },
        // {path: 'dashboard', component:  DashboardComponent, canActivate: [AuthGuard] },
        // {path: 'register-users', component:  RegisterUsersComponent  },
        // {path: 'users', component:  UsersComponent  },
        // {path: 'edit-user', component:  EditUserComponent  },
        // {path: 'station', component:  StationComponent   },
        // {path: 'observationslip', component:  ObservationslipComponent   },
        // {path: 'instrument', component:  InstrumentsComponent   },
        // {path: 'elements', component:  ElementsComponent  },
        // {path: 'home', component:  HomeComponent  },
        // {path: 'main-nav', component:   MainNavComponent  },
        // {path: '', component:  LoginComponent  }
      ])
  ],
   exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule],
  providers: [DataService, AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
