import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MedicalServiceListComponent } from './component/medical-service-list/medical-service-list.component';
import { MedicalServiceDetailsComponent } from './component/medical-service-details/medical-service-details.component';
import { AddMedicalServiceComponent } from './component/add-medical-service/add-medical-service.component';
import { UpdateMedicalServiceComponent } from './component/update-medical-service/update-medical-service.component';
import { MedicalServiceService } from './services/medical-service.service';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ClinicStaffService } from './services/clinic-staff.service';
import { AuthenticateService } from './services/authenticate.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HasRoleDirective } from './has-role.directive';
import { AuthGuardService } from './services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentComponent } from './appointment/appointment.component';

export function tokenGetter() {
    return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomePageComponent,
    MedicalServiceListComponent,
    MedicalServiceDetailsComponent,
    AddMedicalServiceComponent,
    UpdateMedicalServiceComponent,
    StaffListComponent,
    StaffDetailsComponent,
    AddStaffComponent,
    UpdateStaffComponent,
    UserProfileComponent,
    LoginComponent,
    RegisterComponent,
    HasRoleDirective,
    AppointmentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      BrowserAnimationsModule,
      JwtModule.forRoot({
          config: {
              tokenGetter,
              whitelistedDomains: ['localhost:5001'],
              blacklistedRoutes: ['localhost:5001/users/authenticate']
          },
      }),
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'medical-service-list', component: MedicalServiceListComponent },
      { path: 'medical-service-list/:id', component: MedicalServiceDetailsComponent },
      { path: 'update-medical-service/:id', component: UpdateMedicalServiceComponent },
        {   path: 'add-medical-service', component: AddMedicalServiceComponent,
            data: { roles: ['Admin'] },
            canActivate: [AuthGuardService]
        },
       { path: 'staff-list', component: StaffListComponent },
       { path: 'staff-list/:id', component: StaffDetailsComponent },
        {
            path: 'add-staff', component: AddStaffComponent,
            data: { roles: ['Admin', 'Moderator'] },
            canActivate: [AuthGuardService]
        },
       { path: 'update-staff', component: UpdateStaffComponent },
       { path: 'user-profile', component: UserProfileComponent },
       { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'appointment', component: AppointmentComponent }

    ])
    ],
   entryComponents: [
    //AddMedicalServiceComponent,
    //UpdateMedicalServiceComponent,
    ],
    providers: [
        ClinicStaffService,
        AuthenticateService,
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
