import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../models/medical-service.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalServiceService } from '../../services/medical-service.service';

@Component({
  selector: 'app-medical-service-details',
  templateUrl: './medical-service-details.component.html',
  styleUrls: ['./medical-service-details.component.css']
})
export class MedicalServiceDetailsComponent implements OnInit {
    private medicalServiceId: number;
    private currentMedicalService: MedicalService;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MedicalServiceService
    ) { }

    ngOnInit() {
        this.medicalServiceId = Number(this.route.snapshot.paramMap.get('id'));
        this.getDetails();
    }
    getDetails() {
        this.service.getMedicalService(this.medicalServiceId).subscribe(
            result => {
                this.currentMedicalService = result;
            }
        );
    }
    goBack() {
        this.router.navigateByUrl('/medical-service-list');
    }

}
