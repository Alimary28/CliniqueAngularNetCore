import { Component, OnInit } from '@angular/core';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinicStaffService } from '../services/clinic-staff.service';

@Component({
  selector: 'app-staff-details',
  templateUrl: './staff-details.component.html',
  styleUrls: ['./staff-details.component.css']
})
export class StaffDetailsComponent implements OnInit {
    public isOpen = false;
    public label = 'Update';
    public staffId: number;
    public currentStaff: ClinicStaff;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ClinicStaffService
    ) { }

    ngOnInit() {
        this.staffId = Number(this.route.snapshot.paramMap.get('id'));
        this.getDetails();
    }
    getDetails() {
        this.service.getStaffById(this.staffId).subscribe(
            result => {
                this.currentStaff = result;
            }
        );
    }
    reloadData() {
        this.isOpen = false;
        this.getDetails();
    }

    deleteStaff() {
        if (confirm("Are you sure you want to delete this clinic staff?")) {
            this.service.deleteClinicStaff(this.staffId)
                .subscribe
                (
                    result => {
                        alert('Clinic staff successfully deleted!');
                        this.currentStaff = result;
                    },
                    error => alert('Cannot delete clinic staff')
                )
        }
    }

    updateStaff() {
        if (this.isOpen === false) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

    goBack() {
        this.router.navigateByUrl('/staff-list');
    }

}
