import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StaffForMedicalService } from '../models/StaffForMedicalService';
import { ClinicStaff } from '../models/ClinicStaffDetail';

@Injectable({
  providedIn: 'root'
})
export class ClinicStaffService {

    private backendUrl = '/api/ClinicStaffs';
    private medicalServicerUrl = '/api/MedicalServices';

    constructor(private http: HttpClient) { }

    getClinicStaffs() {
        return this.http.get<StaffForMedicalService[]>(this.backendUrl);
    }

    getStaffById(id: number) {
        return this.http.get<ClinicStaff>(this.backendUrl + '/' + `${id}`);
    }

    addClinicStaff(medicalServiceId: number, staff: ClinicStaff) {
        return this.http.post<ClinicStaff>(this.medicalServicerUrl + '/' + `${medicalServiceId}` + '/ClinicStaffs', staff);
    }

    updateClinicStaff(id: number, staff: ClinicStaff) {
        return this.http.put<ClinicStaff>(this.backendUrl + '/' + `${id}`, staff);
    }

    deleteClinicStaff(id: number) {
        return this.http.delete<ClinicStaff>(this.backendUrl + `/${id}`);
    }

    public getFilteredStaff(searchText: string) {
        let params = new HttpParams();
        params = params.append('searchText', searchText);
        return this.http.get<ClinicStaff[]>(this.backendUrl, { params: params });
    }
}

