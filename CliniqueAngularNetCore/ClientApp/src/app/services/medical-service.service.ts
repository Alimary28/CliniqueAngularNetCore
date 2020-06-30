import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MedicalService } from '../models/medical-service.model';
import { MedicalServiceDetail } from '../models/MedicalServiceDetail';

@Injectable({
  providedIn: 'root'
})
export class MedicalServiceService {
    private backendUrl = '/api/MedicalServices';

    constructor(private http: HttpClient) { }

    getMedicalServices() {
       return this.http.get<MedicalService[]>(this.backendUrl);
    }

    getMedicalService(id: number) {
        return this.http.get<MedicalServiceDetail>(this.backendUrl + '/' + `${id}`);
    }

    addMedicalService(medicalService: MedicalService) {
        return this.http.post<MedicalService>(this.backendUrl, medicalService);
    }

    updateMedicalService(id: number, medicalService: MedicalService) {
        return this.http.put<MedicalService>(this.backendUrl + '/' + `${id}`, medicalService);
    }

    deleteMedicalService(id: number){
        return this.http.delete<MedicalService>(this.backendUrl + `/${id}`);
    }

    public getFilteredMedicalService(price: number) {
        let params = new HttpParams();
        params = params.append('price', price.toString());
        return this.http.get<MedicalService[]>(this.backendUrl, { params: params });
    }
}
