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
    profilePhoto?: string;
    contactNumber: string;
    address?: string;
    registrationNumber: string;
    experience: number;
    appointmentFee: number;
    qualification: string;
    currentWorkingPlace: string;
    designation: string;
    avgRating: number;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
};
