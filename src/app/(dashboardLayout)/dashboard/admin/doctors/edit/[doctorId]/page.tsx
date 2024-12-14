"use client";

import FormWrapper from "@/components/sections/FormWrapper";
import InputWrapper from "@/components/sections/InputWrapper";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TEditDoctorProps = {
    params: {
        doctorId: string;
    }
};

const EditDoctor = ({ params }: TEditDoctorProps) => {
    const { doctorId } = params;

    const defaultValues = {
        name: "",
        email: "",
        contactNumber: "",
        address: "",
        registrationNumber: "",
        experience: 0,
        appointmentFee: 0,
        qualification: "",
        currentWorkingPlace: "",
        designation: "",
    };

    const handleSubmit = async (values: FieldValues) => {
        if (values.experience && values.appointmentFee) {
            values.experience = Number(values.experience);
            values.appointmentFee = Number(values.appointmentFee);
        };

        try {
        } catch (err: any) {
            toast.error(err.message);
            console.error(err);
        };
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ textAlign: "center" }}>Edit Doctor</Typography>
            <FormWrapper onSubmit={handleSubmit} defaultValues={defaultValues}>
                <Grid container spacing={2} sx={{ my: 2, mt: 0 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="name"
                            label="Name"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="email"
                            type="email"
                            label="Email"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="contactNumber"
                            label="Contract Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="address"
                            label="Address"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="registrationNumber"
                            label="Registration Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="experience"
                            type="number"
                            label="Experience"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="appointmentFee"
                            type="number"
                            label="AppointmentFee"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="qualification"
                            label="Qualification"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="currentWorkingPlace"
                            label="Current Working Place"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="designation"
                            label="Designation"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>
                <Button type="submit">Update</Button>
            </FormWrapper>
        </Box>
    );
};

export default EditDoctor;
