import { FieldValues } from "react-hook-form";
import FormWrapper from "../sections/FormWrapper";
import FullScreenDialog from "./FullscreenDialog";
import { toast } from "sonner";
import { Button, Grid } from "@mui/material";
import InputWrapper from "../sections/InputWrapper";
import InputSelectWrapper from "../sections/InputSelectWrapper";
import { genders } from "@/constants/global.constants";

type TDoctorDialogProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorDialog = ({ open, setOpen }: TDoctorDialogProps) => {
    const defaultValues = {
        doctor: {
            email: "",
            name: "",
            contactNumber: "",
            address: "",
            registrationNumber: "",
            gender: "",
            experience: 0,
            appointmentFee: 0,
            qualification: "",
            currentWorkingPlace: "",
            designation: "",
            profilePhoto: "",
        },
        password: "",
    };

    const handleSubmit = async (values: FieldValues) => {
        try {
        } catch (err: any) {
            toast.error(err.message);
            console.error(err);
        };
    };

    return (
        <FullScreenDialog open={open} setOpen={setOpen} title="Create doctor">
            <FormWrapper onSubmit={handleSubmit} defaultValues={defaultValues}>
                <Grid container spacing={2} sx={{ my: 2, mt: 0 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.name"
                            label="Name"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.email"
                            type="email"
                            label="Email"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.contactNumber"
                            label="Contract Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.address"
                            label="Address"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.registrationNumber"
                            label="Registration Number"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.experience"
                            type="number"
                            label="Experience"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputSelectWrapper
                            items={genders}
                            name="doctor.gender"
                            label="Gender"
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.appointmentFee"
                            type="number"
                            label="AppointmentFee"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.qualification"
                            label="Qualification"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.currentWorkingPlace"
                            label="Current Working Place"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <InputWrapper
                            name="doctor.designation"
                            label="Designation"
                            fullWidth={true}
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>
                <Button type="submit">Create</Button>
            </FormWrapper>
        </FullScreenDialog>
    );
};

export default DoctorDialog;
