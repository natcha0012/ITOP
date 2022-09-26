export interface User {
    id: number;
    firstname: string;
    lastname: string;
    country: string;
    canEdit: boolean;
    canDelete: boolean;
    citizenid?: string;
    phoneNumber?: string;
    address?: string;
    career?: string;
    salary?: string;

}