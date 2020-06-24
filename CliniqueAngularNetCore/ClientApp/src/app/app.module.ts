import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    CounterComponent,
    HomePageComponent,
    MedicalServiceListComponent,
    MedicalServiceDetailsComponent,
    AddMedicalServiceComponent,
    UpdateMedicalServiceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'medical-service-list', component: MedicalServiceListComponent },
      { path: 'medical-service-list/:id', component: MedicalServiceDetailsComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
