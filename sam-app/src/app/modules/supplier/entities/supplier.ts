export interface Supplier {
    id?: string;
    name: string;
    contacts?: ContactPerson[]
}

export interface ContactDetail {
    contactType: string;
    description: string;
    preferred?: boolean;
}

export interface ContactPerson {
    jobTitle: string;
    firstName: string;
    lastName: string;
    contactDetails: ContactDetail[]
}
