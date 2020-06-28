import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ClinicStaffService } from '../services/clinic-staff.service';
import { MedicalService } from '../models/medical-service.model';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
    @Input() staff: any;
    @Input() currentMedicalService: MedicalService;
    @Output() public onSubmit: EventEmitter<any> = new EventEmitter<any>();

    staffForm: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        age: new FormControl(''),
        position: new FormControl(''),
        employmentDate: new FormControl(''),
        salary: new FormControl('')
    });

    public errorMessage = [];

    constructor(
        private service: ClinicStaffService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.staffForm = this.formBuilder.group({
            id: [this.staff.id],
            firstName: new FormControl(this.staff.firstName),
            lastName: new FormControl(this.staff.lastName),
            age: new FormControl(this.staff.age),
            position: new FormControl(this.staff.position),
            employmentDate: new FormControl(this.staff.employmentDate),
            salary: new FormControl(this.staff.salary),
            medicalServiceId: [this.staff.medicalServiceId]
        });
        this.staffForm.updateValueAndValidity();
    }

    save() {
        this.service.updateClinicStaff(this.staff.id, this.staffForm.value)
            .subscribe( _ => {
                this.initForm();
                this.onSubmit.emit();
                alert("Clinic staff successfully updated");
                    },
                    error => {
                        alert(error);
                    });
    }


}
