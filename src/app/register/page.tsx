"use client";

import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import createFormData from "@/utils/createFormData";
import registerPatients from "@/services/actions/registerPatients";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Inputs = {
    password: string;
    patient: {
        name: string;
        email: string;
        contactNumber: string;
        address: string;
    };
};

const Register = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (values) => {
        const data = createFormData(values);
        const res = await registerPatients(data);

        if (res?.data?.id) {
            toast.success(res.message);
            router.push("/login");
        };
    };

    return (
        <Container sx={{ py: 5 }}>
            <Stack sx={{
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Box sx={{
                    width: "100%",
                    boxShadow: 1,
                    borderRadius: 1,
                    p: 4,
                    textAlign: "center"
                }}>
                    <Stack sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1
                    }}>
                        <Box>
                            <Image src={assets.svgs.logo} width={50} alt="logo" />
                        </Box>
                        <Box>
                            <Typography variant="h5" fontWeight={700}>Patient Register</Typography>
                        </Box>
                    </Stack>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2} sx={{ my: 1 }}>
                            <Grid item md={12}>
                                <TextField label="Full Name" variant="outlined" size="small" type="text" fullWidth {...register("patient.name")} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Email" variant="outlined" size="small" type="email" fullWidth {...register("patient.email")} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Password" variant="outlined" size="small" type="password" fullWidth {...register("password")} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Contact Number" variant="outlined" size="small" type="tel" fullWidth {...register("patient.contactNumber")} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Address" variant="outlined" size="small" type="text" fullWidth {...register("patient.address")} />
                            </Grid>
                            <Grid item md={12}>
                                <Button type="submit" variant="contained" fullWidth>Register</Button>
                            </Grid>
                        </Grid>
                        <Typography component="p" sx={{ mt: 2 }}>Already have an account? <Link href="/login" className="text-blue-600">Login</Link> </Typography>
                    </form>
                </Box>
            </Stack>
        </Container>
    );
};

export default Register;
