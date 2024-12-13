export type TRole = "super_admin" | "admin" | "doctor" | "patient";

export type TMeta = {
    page: number;
    limit: number;
    total: number;
};

export type TDoctor = {
    id: string;
    name: string;
    email: string;
    address: string;
    appointmentFee: number;
    avgRating: number;
    contactNumber: string;
    currentWorkingPlace: string;
    designation: string;
    doctorSpecialty: string[];
    experience: number;
    profilePhoto: string;
    qualification: string;
    registrationNumber: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
};
