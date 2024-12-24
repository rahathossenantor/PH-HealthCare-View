"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { setCookie } from "@/services/actions/cookies.services";

const loginSchema = z.object({
    email: z.string().email("Invalid email address!"),
    password: z.string().min(5, "Password must be at least 5 characters")
});

const Login = () => {

    const onSubmit = async (values: FieldValues) => {
        const res = await loginUser(values);
        const needsPasswordChange = res?.data?.needsPasswordChange;

        if (res?.data?.accessToken) {
            toast.success(res?.message);
            storeUserToken(res?.data?.accessToken);
            setCookie(res?.data?.accessToken, { redirectUrl: "/dashboard", needsPasswordChange });
        } else {
            toast.error(res?.message);
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
                    <FormWrapper
                        onSubmit={onSubmit}
                        resolver={zodResolver(loginSchema)}
                        defaultValues={{
                            email: "",
                            password: ""
                        }}
                    >
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
                            <Typography component="p" sx={{ mt: 2 }}>Forgot password? <Link href="/forget-password" className="text-blue-600">Reset Here</Link> </Typography>
                            <Typography component="p" sx={{ mt: 2 }}>Don&apos;t have an account? <Link href="/register" className="text-blue-600">Register</Link> </Typography>
                        </Stack>
                    </FormWrapper>
                </Box>
            </Stack>
        </Container>
    );
};

export default Login;
