import { Component, OnInit, Inject } from '@angular/core';
import { StaffForMedicalService } from '../models/StaffForMedicalService';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ClinicStaffService } from '../services/clinic-staff.service';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { error } from '@angular/compiler/src/util';
import { AuthenticateService } from '../services/authenticate.service';

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

    public isLoggedIn: boolean;
    public currentUserRole: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ClinicStaffService,
        private authService: AuthenticateService,
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) { }

    ngOnInit() {
        this.getStaffList();
        this.isLoggedIn = this.authService.isLoggedIn();
        this.currentUserRole = this.authService.getUserRole();
    }
    doSearch() {
        this.router.navigate([], {
            queryParams: { searchText: this.searchText }
        });
        this.getStaffList();
    }

    getStaffList() {
        if (this.searchText) {
            this.service.getFilteredStaff(this.searchText).subscribe(
                result => this.staffs = result
            );
        } else {
            this.http.get<StaffForMedicalService[]>(this.baseUrl + 'api/ClinicStaffs').subscribe(res => {
                this.staffs = res;
                console.log(this.staffs);
            },
                error => console.error(error)
            );
            this.router.navigate(['/staff-list']);
        }
        
    }

    getStaffById(id: number) {
        return this.staffs.find(staff => staff.id === id);
    }

}
