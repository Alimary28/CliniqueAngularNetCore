import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentDto } from '../models/appointmentDto';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

    private backendUrl = '/api/Appointments';

    constructor(private http: HttpClient) { }

    getUserAppointments(userId: number) {
        return this.http.get<AppointmentDto[]>(this.backendUrl + '/' + `${userId}`);
    }

    addAppointment(appointment: AppointmentDto) {
        return this.http.post<AppointmentDto>(this.backendUrl, appointment);
    }
}
