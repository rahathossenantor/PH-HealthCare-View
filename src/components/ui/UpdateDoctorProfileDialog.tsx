"use client";

import { FieldValues } from "react-hook-form";
import FormWrapper from "../sections/FormWrapper";
import FullScreenDialog from "./FullscreenDialog";
import { Button, Grid } from "@mui/material";
import InputWrapper from "../sections/InputWrapper";
import MultipleSpecialtySelectInput from "./MultipleSpecialtySelectInput";
import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesAPI";
import { useState } from "react";

type TUpdateDoctorProfileDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: any;
};

const UpdateDoctorProfileDialog = ({ open, setOpen, data }: TUpdateDoctorProfileDialogProps) => {
    const { data: specialties } = useGetAllSpecialtiesQuery({});
    const [selectedSpecialtyIds, setSelectedSpecialtyIds] = useState([]);

    const handleSubmit = async (values: FieldValues) => {
        const excludedFields: Array<keyof typeof values> = [
            "email",
            "id",
            "role",
            "needPasswordChange",
            "status",
            "createdAt",
            "updatedAt",
            "isDeleted",
            "averageRating",
            "review",
            "profilePhoto",
            "registrationNumber",
            "schedules",
            "doctorSpecialties",
        ];

        const updatedValues = Object.fromEntries(
            Object.entries(values).filter(([key]) => {
                return !excludedFields.includes(key);
            })
        );

        const specialties = selectedSpecialtyIds.map(
            (id: string) => ({
                id,
                isDeleted: false,
            })
        );

        updatedValues.specialties = specialties;
    };

    return (
        <FullScreenDialog open={open} setOpen={setOpen} title="Update Profile">
            <FormWrapper
                onSubmit={handleSubmit}
                defaultValues={data}
            >
                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="name"
                            label="Name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="email"
                            type="email"
                            label="Email"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="contactNumber"
                            label="Contract Number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="address"
                            label="Address"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="registrationNumber"
                            label="Registration Number"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="experience"
                            type="number"
                            label="Experience"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="appointmentFee"
                            type="number"
                            label="AppointmentFee"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="qualification"
                            label="Qualification"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="currentWorkingPlace"
                            label="Current Working Place"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="designation"
                            label="Designation"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <MultipleSpecialtySelectInput
                            allSpecialties={specialties}
                            selectedIds={selectedSpecialtyIds}
                            setSelectedIds={setSelectedSpecialtyIds}
                        />
                    </Grid>
                </Grid>

                <Button type="submit">Update</Button>
            </FormWrapper>
        </FullScreenDialog>
    );
};

export default UpdateDoctorProfileDialog;
