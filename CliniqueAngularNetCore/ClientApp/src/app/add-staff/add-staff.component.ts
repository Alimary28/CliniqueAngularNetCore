import { Component, OnInit } from '@angular/core';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
    public label = 'Add';
    public clinicStaff: any = new ClinicStaff();
    constructor(private router: Router) { }

  ngOnInit() {
  }
    reloadData(action: any) {
        this.router.navigate(['staff-list']);
    }
}
