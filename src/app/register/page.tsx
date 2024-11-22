import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Stack sx={{
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Box sx={{
                    width: "100%",
                    // maxWidth: 600,
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
                    <form>
                        <Grid container spacing={2} sx={{ my: 1 }}>
                            <Grid item md={12}>
                                <TextField label="Full Name" variant="outlined" size="small" type="text" fullWidth />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Email" variant="outlined" size="small" type="email" fullWidth />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Password" variant="outlined" size="small" type="password" fullWidth />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Contact Number" variant="outlined" size="small" type="tel" fullWidth />
                            </Grid>
                            <Grid item md={6}>
                                <TextField label="Address" variant="outlined" size="small" type="text" fullWidth />
                            </Grid>
                            <Grid item md={12}>
                                <Button variant="contained" fullWidth>Register</Button>
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
