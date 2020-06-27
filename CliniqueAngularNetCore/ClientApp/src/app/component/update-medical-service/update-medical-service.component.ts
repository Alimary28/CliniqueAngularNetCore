import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MedicalService } from '../../models/medical-service.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalServiceService } from '../../services/medical-service.service';

@Component({
  selector: 'app-update-medical-service',
  templateUrl: './update-medical-service.component.html',
  styleUrls: ['./update-medical-service.component.css']
})
export class UpdateMedicalServiceComponent implements OnInit {

    @Input() public submitLabel: string;
    @Input() public selectedMedicalService: MedicalService;
    @Output() public onSubmit: EventEmitter<any> = new EventEmitter<any>();

    public form: FormGroup;
    public errorMessage = [];

    constructor(
        private service: MedicalServiceService
    ) { }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = new FormGroup({
            domain: new FormControl(this.selectedMedicalService.domain),
            name: new FormControl(this.selectedMedicalService.name),
            description: new FormControl(this.selectedMedicalService.description),
            minutes: new FormControl(this.selectedMedicalService.minutes),
            price: new FormControl(this.selectedMedicalService.price)
        });
        this.form.updateValueAndValidity();
    }

    submitData() {
        try {
            const medicalService = this.form.value as MedicalService;
            medicalService.id = this.selectedMedicalService.id;

            if (this.submitLabel === "Add") {
                this.service.addMedicalService(medicalService).subscribe(
                    _ => {
                        this.onSubmit.emit(this.submitLabel);
                        alert("Medical service successfully added");
                    },
                    error => {
                        alert(error);
                    }
                );
            }
            else {
                this.service.updateMedicalService(medicalService.id, medicalService).subscribe(
                    _ => {
                        this.onSubmit.emit(this.submitLabel);
                        alert("Medical service successfully updated");
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
