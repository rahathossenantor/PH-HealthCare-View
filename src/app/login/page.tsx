"use client";

import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import loginUser from "@/services/actions/loginUser";
import { storeUserToken } from "@/services/auth.services";

export type TLoginInputs = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TLoginInputs>()
    const onSubmit: SubmitHandler<TLoginInputs> = async (values) => {
        const res = await loginUser(values);
        console.log(res);

        if (res?.data?.accessToken) {
            storeUserToken(res.data.accessToken);
            toast.success(res.message);
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2} sx={{ my: 1 }}>
                            <Grid item md={6}>
                                <TextField label="Email" variant="outlined" size="small" type="email" fullWidth {...register("email")} />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Password" variant="outlined" size="small" type="password" fullWidth {...register("password")} />
                            </Grid>
                            <Grid item md={12}>
                                <Button type="submit" variant="contained" fullWidth>Login</Button>
                            </Grid>
                        </Grid>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography component="p" sx={{ mt: 2 }}>Forgot password? <Link href="" className="text-blue-600">Reset Here</Link> </Typography>
                            <Typography component="p" sx={{ mt: 2 }}>Don&apos;t have an account? <Link href="/register" className="text-blue-600">Register</Link> </Typography>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Container>
    );
};

export default Login;
