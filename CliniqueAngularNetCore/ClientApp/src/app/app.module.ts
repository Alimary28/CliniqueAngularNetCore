import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    HomePageComponent,
    MedicalServiceListComponent,
    MedicalServiceDetailsComponent,
    AddMedicalServiceComponent,
    UpdateMedicalServiceComponent,
    StaffListComponent,
    StaffDetailsComponent,
    AddStaffComponent,
    UpdateStaffComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
     ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'medical-service-list', component: MedicalServiceListComponent },
      { path: 'medical-service-list/:id', component: MedicalServiceDetailsComponent },
      { path: 'update-medical-service/:id', component: UpdateMedicalServiceComponent },
      { path: 'add-medical-service', component: AddMedicalServiceComponent },
        { path: 'staff-list', component: StaffListComponent },
        { path: 'staff-list/:id', component: StaffDetailsComponent },
        { path: 'add-staff', component: AddStaffComponent },
        { path: 'update-staff', component: UpdateStaffComponent }
    ])
    ],
   entryComponents: [
    AddMedicalServiceComponent,
    UpdateMedicalServiceComponent,
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
