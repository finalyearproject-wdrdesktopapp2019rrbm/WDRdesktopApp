import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule
    } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

//services
import { DataService } from './components/services/data/data.service';
import { UserService } from './components/services/user/user.service';

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
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ObservationslipComponent } from './components/forms/observationslip/observationslip.component';
import { StationComponent } from './components/forms/station/station.component';
import { ElementsComponent } from './components/forms/elements/elements.component';
import { InstrumentsComponent } from './components/forms/instruments/instruments.component';
import { ArchiveObservationslipComponent } from './components/archiveForm/archive-observationslip/archive-observationslip.component';
import { ArchivemonthlyrainfallformreportdataComponent } from './components/archiveForm/archivemonthlyrainfallformreportdata/archivemonthlyrainfallformreportdata.component';
import { ArchivedekadalformreportdataComponent } from './components/archiveForm/archivedekadalformreportdata/archivedekadalformreportdata.component';
import { UsertestComponent } from './components/usertest/usertest.component';
import { ObservationSlipFormComponent } from './components/forms/observation-slip-form/observation-slip-form.component';
import { ObservationSlipReportComponent } from './components/forms/observation-slip-report/observation-slip-report.component';
import { ViewObservationslipformsComponent } from './components/forms/view-observationslipforms/view-observationslipforms.component';
import { AlertService } from './components/services/allServices';
import { InternetStatusService  } from './components/services/allServices';
import { ViewStationComponent } from './components/forms/view-station/view-station.component';

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
    UsertestComponent,
    ObservationSlipFormComponent,
    ObservationSlipReportComponent,
    ViewObservationslipformsComponent,
    ViewStationComponent
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
        {path: 'datamanager', component:  DatamanagerComponent  },
        {path: 'dashboard', component:  DashboardComponent, canActivate: [AuthGuard] },
        {path: 'register-users', component:  RegisterUsersComponent  },
        {path: 'users', component:  UsersComponent  },
        {path: 'edit-user', component:  EditUserComponent  },
        {path: 'station', component:  StationComponent   },
        {path: 'observationslip', component:  ObservationslipComponent   },
        {path: 'instrument', component:  InstrumentsComponent   },
        {path: 'elements', component:  ElementsComponent  },
        {path: 'home', component:  HomeComponent  },
        { path: 'add-station', component: StationComponent },
        { path: 'add-observationslip', component: ObservationslipComponent },
        { path: 'view-observationslipForms', component: ViewObservationslipformsComponent},
        {path: 'main-nav', component:   MainNavComponent  },
        {path: '', component:  LoginComponent  },
        {path: 'usertest', component:  UsertestComponent  },
        {path: 'observationSlipForm', component:  ObservationSlipFormComponent  },
        {path: 'observationSlipReport', component:  ObservationSlipReportComponent  },
        {path: 'view-observationslipforms', component: ViewObservationslipformsComponent },
        {path: 'view-stations', component: ViewStationComponent }


      ]),
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
    HttpModule,
    FormsModule
  ],
   exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule, MatTableModule],
  providers: [DataService, AuthGuard, UserService, AlertService,InternetStatusService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
