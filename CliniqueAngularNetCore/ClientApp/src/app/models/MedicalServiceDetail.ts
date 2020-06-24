import { Domain } from "./medical-service.model";


export class MedicalServiceDetail {
    id: number;
    domain: Domain;
    type: string;
    description: string;
    minutes: number;
    price: number;
    staffs?: any[]; 
}
