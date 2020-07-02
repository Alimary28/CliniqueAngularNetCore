import { Component, OnInit } from '@angular/core';
import { AppointmentDto } from '../models/appointmentDto';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

    appointments: AppointmentDto[];
    private userId: number;
    constructor(private service: AppointmentService,
        private route: ActivatedRoute,
        private authService: AuthenticateService) { }

    ngOnInit() {

        this.loadAppointments();
  }

    loadAppointments() {
        this.userId = parseInt(this.authService.decodedToken.nameid);

        this.service.getUserAppointments(this.userId).subscribe(result => {
            this.appointments = result;
        },
            error => alert(error));
    }
}
