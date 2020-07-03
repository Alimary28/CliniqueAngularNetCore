import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicalService} from '../../models/medical-service.model';
import { MedicalServiceService } from '../../services/medical-service.service';
import { AuthenticateService } from '../../services/authenticate.service';


@Component({
  selector: 'app-medical-service-list',
  templateUrl: './medical-service-list.component.html',
  styleUrls: ['./medical-service-list.component.css']
})
export class MedicalServiceListComponent implements OnInit {

    public services: MedicalService[];
    public isOpen = false;
    public id: number;
    public price: number;
    public isLoggedIn: boolean;
    public currentUserRole: string;
   
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private medicalService: MedicalServiceService,
        private authService: AuthenticateService,
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {

        document.querySelector('app-nav-menu').setAttribute('style', 'display:block;');

    }

    ngOnInit() {
        
        this.getMedicalServices();
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentUserRole = this.authService.getUserRole();
    }

    doSearch() {
        this.router.navigate([], {
            queryParams: { price: this.price }
        });
        this.getMedicalServices();
    }

    getMedicalServices() {
        
        if (this.price) {
            this.medicalService.getFilteredMedicalService(this.price).subscribe(
                result => this.services = result
            );
        } else {
            this.medicalService.getMedicalServices().subscribe(result => {
                this.services = result;
                console.log(this.services);
            }
                , error => console.error(error)
            );
            this.router.navigate(['/medical-service-list']);
        }
    }

    reloadData(action: any) {
        this.id = undefined;
        this.isOpen = false;
        if (action !== 'Cancel') {
            this.getMedicalServices();
        }
    }

    getMedicalServiceById(id: number) {
        return this.services.find(medicalService => medicalService.id === id);
    }

}

