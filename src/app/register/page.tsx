"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import createFormData from "@/utils/createFormData";
import registerPatients from "@/services/actions/registerPatients";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import loginUser from "@/services/actions/loginUser";
import { storeUserToken } from "@/services/auth.services";
import FormWrapper from "@/components/sections/FormWrapper";
import InputWrapper from "@/components/sections/InputWrapper";

const Register = () => {
    const router = useRouter();

    const onSubmit = async (values: FieldValues) => {
        const data = createFormData(values);
        const res = await registerPatients(data);

        if (res?.data?.id) {
            toast.success(res.message);

            const user = await loginUser({
                email: res?.data?.email,
                password: values.password
            });
            if (user?.data?.accessToken) {
                storeUserToken(user.data.accessToken);
                router.push("/");
            };
        } else {
            toast.error(res.message);
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
                    <FormWrapper onSubmit={onSubmit}>
                        <Grid container spacing={2} sx={{ my: 1 }}>
                            <Grid item md={12}>
                                <InputWrapper
                                    label="Full Name"
                                    name="patient.name"
                                />
                            </Grid>
                            <Grid item md={6}>
                                <InputWrapper
                                    label="Email"
                                    type="email"
                                    name="patient.email"
                                />
                            </Grid>
                            <Grid item md={6}>
                                <InputWrapper
                                    label="Password"
                                    type="password"
                                    name="password"
                                />
                            </Grid>
                            <Grid item md={6}>
                                <InputWrapper
                                    label="Contact Number"
                                    type="tel"
                                    name="patient.contactNumber"
                                />
                            </Grid>
                            <Grid item md={6}>
                                <InputWrapper
                                    label="Address"
                                    name="patient.address"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Button type="submit" variant="contained" fullWidth>Register</Button>
                            </Grid>
                        </Grid>
                        <Typography component="p" sx={{ mt: 2 }}>Already have an account? <Link href="/login" className="text-blue-600">Login</Link> </Typography>
                    </FormWrapper>
                </Box>
            </Stack>
        </Container>
    );
};

export default Register;
