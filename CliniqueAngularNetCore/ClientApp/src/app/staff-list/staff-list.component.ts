import { Component, OnInit, Inject } from '@angular/core';
import { StaffForMedicalService } from '../models/StaffForMedicalService';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClinicStaffService } from '../services/clinic-staff.service';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.css']
})
export class StaffListComponent implements OnInit {

    public staffs: StaffForMedicalService[];
    public isOpen = false;
    public id: number;
    public searchText: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ClinicStaffService,
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) { }

    ngOnInit() {
        this.getStaffList();
    }

    getStaffList() {
        this.http.get<StaffForMedicalService[]>(this.baseUrl + 'api/ClinicStaffs').subscribe(res => {
            this.staffs = res;
            console.log(this.staffs);
        },
            error => console.error(error)
        );
        this.router.navigate(['/staff-list']);
        
    }

    getStaffById(id: number) {
        return this.staffs.find(staff => staff.id === id);
    }

}
