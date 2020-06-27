import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicalService} from '../../models/medical-service.model';
import { MedicalServiceService } from '../../services/medical-service.service';


@Component({
  selector: 'app-medical-service-list',
  templateUrl: './medical-service-list.component.html',
  styleUrls: ['./medical-service-list.component.css']
})
export class MedicalServiceListComponent implements OnInit {

    public services: MedicalService[];
    public isOpen = false;
    public id: number;
    public searchText: string;
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private medicalService: MedicalServiceService,
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {

        document.querySelector('app-nav-menu').setAttribute('style', 'display:block;');

    }

    ngOnInit() {
        this.getMedicalServices();
    }

    doSearch() {
        this.router.navigate([], {
            queryParams: { searchText: this.searchText }
        });
        this.getMedicalServices();
    }

    getMedicalServices() {
        
        if (this.searchText) {
            this.medicalService.getFilteredMedicalService(this.searchText).subscribe(
                result => this.services = result
            );
        } else {
            this.http.get<MedicalService[]>(this.baseUrl + 'api/MedicalServices').subscribe(result => {
                this.services = result;
                console.log(this.services);
            }
                , error => console.error(error)
            );
            this.router.navigate(['/medical-service-list']);
        }
    }

    getMedicalServiceById(id: number) {
        return this.services.find(medicalService => medicalService.id === id);
    }

}

