import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { AuthenticateService } from '../services/authenticate.service';
import { AppointmentDto } from '../models/appointmentDto';
import { ClinicStaffService } from '../services/clinic-staff.service';
import { StaffForMedicalService } from '../models/StaffForMedicalService';
import { ClinicStaff } from '../models/ClinicStaffDetail';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

    staffId: number;
    fullName = [];
    doctorId: number;
    loggedUserId: number;
    selected: number = 0;
    item: number;
    appointmentForm: FormGroup = new FormGroup({
        userFullName: new FormControl(''),
        fullName: new FormControl(''),
        reason: new FormControl(''),
        appointmentTime: new FormControl('')
    });
    constructor(
        private formBuilder: FormBuilder,
        private service: AppointmentService,
        private authService: AuthenticateService,
        private staffService: ClinicStaffService,
        private router: Router) { }

    ngOnInit() {
        this.createappointmentForm();
        this.getStaffs();
  }

    createappointmentForm() {
        this.appointmentForm = this.formBuilder.group({
            userFullName: ['', Validators.required],
            fullName: ['', Validators.required],
            reason: ['', Validators.required],
            appointmentTime: ['', Validators.required]
        });
        this.getStaffs();
    }

    onClick(event: any) {
        this.selected = parseInt(event.target.value);
    }

    saveAppointment() {
       
        this.loggedUserId = parseInt(this.authService.decodedToken.nameid);
        const newAppointment = this.appointmentForm.value as AppointmentDto;
        this.staffId = this.selected;
        
        newAppointment.userId = this.loggedUserId;
        newAppointment.staffId = this.staffId;
        this.service.addAppointment(newAppointment)
                    .subscribe(
                        () => {
                            alert('Appointment succesfully added!');
                            this.router.navigateByUrl('/appointment-list/' + this.loggedUserId);
                        },
                        err => {
                            alert('Appointment not added!');
                        });
    }

    getStaffs() {

        return this.staffService.getClinicStaffs().subscribe(data => {
            this.fullName = data;
            console.log(this.fullName);
        });
        
    }

}
