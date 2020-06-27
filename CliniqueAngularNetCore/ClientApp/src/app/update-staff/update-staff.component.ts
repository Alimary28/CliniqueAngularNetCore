import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { FormGroup, FormControl } from '@angular/forms';
import { ClinicStaffService } from '../services/clinic-staff.service';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {


    @Input() public submitLabel: string;
    @Input() public selectedStaff: ClinicStaff;
    @Output() public onSubmit: EventEmitter<any> = new EventEmitter<any>();

    public form: FormGroup;
    public errorMessage = [];

    constructor(
        private service: ClinicStaffService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = new FormGroup({
            firstName: new FormControl(this.selectedStaff.firstName),
            lastName: new FormControl(this.selectedStaff.lastName),
            age: new FormControl(this.selectedStaff.age),
            position: new FormControl(this.selectedStaff.position),
            employmentDate: new FormControl(this.selectedStaff.employmentDate),
            salary: new FormControl(this.selectedStaff.salary)
        });
        this.form.updateValueAndValidity();
    }

    submitData() {
        try {
            const clinicStaff = this.form.value as ClinicStaff;
            clinicStaff.id = this.selectedStaff.id;

            if (this.submitLabel === "Add") {
                this.service.addClinicStaff(clinicStaff).subscribe(
                    _ => {
                        this.onSubmit.emit(this.submitLabel);
                        alert("Clinic staff successfully added");
                    },
                    error => {
                        alert(error);
                    }
                );
            }
            else {
                this.service.updateClinicStaff(clinicStaff.id, clinicStaff).subscribe(
                    _ => {
                        this.onSubmit.emit(this.submitLabel);
                        alert("Clinic staff successfully updated");
                    },
                    error => {
                        alert(error);
                    }
                );
            }
        } catch (e) {
            alert(e.message);
        }


    }

}
