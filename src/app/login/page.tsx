"use client";

import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import loginUser from "@/services/actions/loginUser";
import { storeUserToken } from "@/services/auth.services";
import { useRouter } from "next/navigation";
import FormWrapper from "@/components/sections/FormWrapper";
import InputWrapper from "@/components/sections/InputWrapper";

const Login = () => {
    const router = useRouter();

    const onSubmit = async (values: FieldValues) => {
        const res = await loginUser(values);

        if (res?.data?.accessToken) {
            storeUserToken(res.data.accessToken);
            toast.success(res.message);
            router.push("/");
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
                            <Typography variant="h5" fontWeight={700}>Login</Typography>
                        </Box>
                    </Stack>
                    <FormWrapper onSubmit={onSubmit}>
                        <Grid container spacing={2} sx={{ my: 1 }}>
                            <Grid item md={6}>
                                <InputWrapper
                                    name="email"
                                    label="Email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item md={6}>
                                <InputWrapper
                                    name="password"
                                    label="Password"
                                    type="password"
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Button type="submit" variant="contained" fullWidth>Login</Button>
                            </Grid>
                        </Grid>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography component="p" sx={{ mt: 2 }}>Forgot password? <Link href="" className="text-blue-600">Reset Here</Link> </Typography>
                            <Typography component="p" sx={{ mt: 2 }}>Don&apos;t have an account? <Link href="/register" className="text-blue-600">Register</Link> </Typography>
                        </Stack>
                    </FormWrapper>
                </Box>
            </Stack>
        </Container>
    );
};

export default Login;
