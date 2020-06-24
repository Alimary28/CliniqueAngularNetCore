export enum Domain {
    Orthopedics = 0,
    Cardiology = 1,
    Physiokinetotherapy = 2,
    Surgery = 3
}
export interface MedicalService {
    id: number;
    domain: Domain;
    type: string,
    description: string;
    minutes: number;
    price: number;
    staffs?: string[];
}
