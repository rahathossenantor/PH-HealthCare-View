import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import chooseUsImg from "@/assets/choose-us.png";
import assets from "@/assets";

const services = [
    {
        imageSrc: assets.svgs.award,
        title: "Award Winning Service",
        description: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.care,
        title: "Best Quality Pregnancy Care",
        description: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.equipment,
        title: "Complete Medical Equipments",
        description: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    },
    {
        imageSrc: assets.svgs.call,
        title: "Dedicated Emergency Care",
        description: "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
    }
];

const boxDesign = {
    display: "flex",
    gap: 2,
    alignItems: "center",
    backgroundColor: "rgba(245, 245, 245, 1)",
    padding: "15px",
    marginBottom: "15px"
};

const WhyUs = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight={700} color="primary">Why Us?</Typography>
                <Typography variant="h4" fontWeight={700}>Why Choose Us?</Typography>
            </Box>
            <Grid container spacing={2} mt={2} sx={{ alignItems: "center" }}>
                <Grid item md={6}>
                    <Box sx={{
                        ...boxDesign,
                        borderRadius: "10px 10px 100px 10px"
                    }}>
                        <Box><Image src={services[0].imageSrc} width={50} alt="icon" /></Box>
                        <Box>
                            <Typography variant="h5" fontWeight={700}>{services[0].title}</Typography>
                            <Typography component="p">{services[0].description}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        ...boxDesign,
                        borderRadius: "10px 100px 10px 10px"
                    }}>
                        <Box><Image src={services[1].imageSrc} width={50} alt="icon" /></Box>
                        <Box>
                            <Typography variant="h5" fontWeight={700}>{services[1].title}</Typography>
                            <Typography component="p">{services[1].description}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        ...boxDesign,
                        borderRadius: "10px 10px 100px 10px"
                    }}>
                        <Box><Image src={services[2].imageSrc} width={50} alt="icon" /></Box>
                        <Box>
                            <Typography variant="h5" fontWeight={700}>{services[2].title}</Typography>
                            <Typography component="p">{services[2].description}</Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        ...boxDesign,
                        borderRadius: "10px 100px 10px 10px"
                    }}>
                        <Box><Image src={services[3].imageSrc} width={50} alt="icon" /></Box>
                        <Box>
                            <Typography variant="h5" fontWeight={700}>{services[3].title}</Typography>
                            <Typography component="p">{services[3].description}</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6}>
                    <Image src={chooseUsImg} alt="choose-us" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyUs;
