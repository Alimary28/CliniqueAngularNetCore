import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  
    public services: MedicalServices[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
      http.get<MedicalServices[]>(baseUrl + 'api/MedicalServices').subscribe(result => {
          this.services = result;
      }, error => console.error(error));
  }
}

enum Domain {
    Orthopedics=0,
    Cardiology=1,
    Physiokinetotherapy=2,
    Surgery=3
}
interface MedicalServices {
    id: number;
    domain: Domain;
    type: string,
    description: string;
}
