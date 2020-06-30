import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../../models/medical-service.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalServiceService } from '../../services/medical-service.service';
import { StaffForMedicalService } from '../../models/StaffForMedicalService';
import { MedicalServiceDetail } from '../../models/MedicalServiceDetail';
import { ClinicStaffService } from '../../services/clinic-staff.service';
import { AuthenticateService } from '../../services/authenticate.service';

@Component({
    selector: 'app-medical-service-details',
    templateUrl: './medical-service-details.component.html',
    styleUrls: ['./medical-service-details.component.css']
})
export class MedicalServiceDetailsComponent implements OnInit {

    public isOpen = false;
    public label = 'Update';
    private medicalServiceId: number;
    private currentMedicalService: MedicalServiceDetail;
    public staffs: StaffForMedicalService;
    public addStaffMode = false;
    public updateStaffMode = false;

    public currentUserRole: string;
    public isLoggedIn: boolean;
    public isUserLoggedIn = false;
    public loggedUser: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: MedicalServiceService,
        private staffService: ClinicStaffService,
        private authService: AuthenticateService
    ) { }

    ngOnInit() {
        this.medicalServiceId = Number(this.route.snapshot.paramMap.get('id'));
        this.getDetails();

        this.isUserLoggedIn = this.authService.isLoggedIn();
        if (this.isUserLoggedIn) {
            this.loggedUser = this.authService.decodedToken.unique_name;
        }
        this.currentUserRole = this.authService.getUserRole();
    }


    getDetails() {
        this.service.getMedicalService(this.medicalServiceId).subscribe(
            result => {
                this.currentMedicalService = result;
            }
        );
    }
    reloadData() {
        this.updateStaffMode = false;
        this.isOpen = false;
        this.getDetails();
    }

    deleteMedicalService() {
        if (confirm("Are you sure you want to delete this medical service?")) {
            this.service.deleteMedicalService(this.medicalServiceId)
                .subscribe
                (
                    result => {
                        alert('Medical service successfully deleted!');
                        this.currentMedicalService = result;
                    },
                    error => alert('Cannot delete medical service')
                )
        }
    }
            
    addDoctor() {
        this.router.navigateByUrl('/add-clinic-staff');
    }

    updateMedicalService() {
        if (this.isOpen === false) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

    staffFormToggle() {
        this.updateStaffMode = false;
        this.addStaffMode = !this.addStaffMode;
    }

    updateStaff(staff) {
        this.staffs = staff;
        this.addStaffMode = false;
        this.updateStaffMode = !this.updateStaffMode;
    }

    addStaffPassChild() {
        this.addStaffMode = false;
    }

    closeFormAtCancel() {
        this.addStaffMode = false;
    }

    closeUpdateFormAtCancel() {
        this.updateStaffMode = false;
    }

    deleteStaff(staffId) {
        this.updateStaffMode = false;
        if (confirm("Are you sure you want to delete this clinic staff?")) {
            this.staffService.deleteClinicStaff(staffId)
                .subscribe
                (
                    result => {
                        alert('Clinic staff successfully deleted!');
                        this.getDetails();
                    },
                    error => alert('Cannot delete medical service')
                )
        }
    }

    goBack() {
        this.router.navigateByUrl('/medical-service-list');
    }

}
