import { Box, Button, Container, Stack, Typography } from "@mui/material";
import assets from "@/assets/index";
import Image from "next/image";

const Hero = () => {
    return (
        <Container>
            <Stack direction="row" justifyContent="center" alignItems="center" py={5}>
                <Box sx={{
                    position: "relative",
                    width: "50%"
                }}
                >
                    <Box sx={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }} ><Image src={assets.svgs.grid} alt="grid" /></Box>
                    <Box py={6}>
                        <Typography variant="h2" component="h1" fontWeight={600}>Healthier Hearts</Typography>
                        <Typography variant="h2" component="h1" fontWeight={600}>Come From</Typography>
                        <Typography variant="h2" component="h1" fontWeight={600} color="primary.main">Preventive Care</Typography>

                        <Typography component="p" sx={{ fontSize: "20px" }} py={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis excepturi porro eos neque quidem et vitae ratione eaque nemo, eligendi voluptatem velit? Incidunt inventore quam architecto amet non veniam iure.</Typography>

                        <Button variant="contained">Make Appointment</Button>
                        <Button variant="outlined" sx={{ ml: 2 }}>Contact Us</Button>
                    </Box>
                </Box>

                <Box sx={{
                    width: "50%",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative"
                }}>
                    <Box sx={{ position: "absolute" }}>
                        <Image src={assets.svgs.arrow} height={100} width={100} alt="icon" />
                    </Box>
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Box mt={4}>
                            <Image src={assets.images.doctor1} height={380} width={240} alt="doctor" />
                        </Box>
                        <Box>
                            <Image src={assets.images.doctor2} height={350} width={240} alt="doctor" />
                        </Box>
                        <Box sx={{ position: "absolute", top: "220px", left: "150px" }}>
                            <Image src={assets.images.doctor3} height={240} width={240} alt="doctor" />
                        </Box>
                        <Box sx={{ position: "absolute", bottom: "-40px", right: 0, zIndex: -1 }}>
                            <Image src={assets.images.stethoscope} height={170} width={170} alt="stethoscope" />
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </Container>
    );
};

export default Hero;

{/*  */ }
