import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../models/medical-service.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-medical-service',
  templateUrl: './add-medical-service.component.html',
  styleUrls: ['./add-medical-service.component.css']
})
export class AddMedicalServiceComponent implements OnInit {

    public label = 'Add';
    public medicalService: any = new MedicalService();

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        
    }


    reloadData(action: any) {
        this.router.navigate(['medical-service-list']);
    }

}
