import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { Router } from '@angular/router';
import { MedicalServiceDetail } from '../models/MedicalServiceDetail';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ClinicStaffService } from '../services/clinic-staff.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent {

    @Output() public onSubmit: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onClose: EventEmitter<any> = new EventEmitter<any>();

    @Input() currentMedicalService: MedicalServiceDetail;

    staffForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        age: new FormControl(''),
        position: new FormControl(''),
        employmentDate: new FormControl(''),
        salary: new FormControl('')
    });

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private service: ClinicStaffService,
        private http: HttpClient
    ) { }

    save() {
        const newStaff = this.staffForm.value as ClinicStaff;
        this.service.addClinicStaff(this.currentMedicalService.id, newStaff)
            .subscribe(
                () => {
                    alert('Succesfully added!');
                    this.onSubmit.emit();
                },
                err => {
                    alert('Clinic staff not added!');
                });
    }
}
