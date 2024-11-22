import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
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
                    <form>
                        <Grid container spacing={2} sx={{ my: 1 }}>
                            <Grid item md={6}>
                                <TextField label="Email" variant="outlined" size="small" type="email" fullWidth />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Password" variant="outlined" size="small" type="password" fullWidth />
                            </Grid>
                            <Grid item md={12}>
                                <Button variant="contained" fullWidth>Login</Button>
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
