import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "../../assets/landing_page/facebook.png";
import linkedinIcon from "../../assets/landing_page/linkedin.png";
import twitterIcon from "../../assets/landing_page/twitter.png";
import instagramIcon from "../../assets/landing_page/instagram.png";

const Footer = () => {
    return (
        <Box bgcolor="#121828" py={4}>
            <Container>
                <Stack direction="row" justifyContent="center" gap={4}>
                    <Typography component={Link} href="/" color="white">Home</Typography>
                    <Typography component={Link} href="/" color="white">Heath Plans</Typography>
                    <Typography component={Link} href="/" color="white">Medicines</Typography>
                    <Typography component={Link} href="/" color="white">Diagnostics</Typography>
                    <Typography component={Link} href="/" color="white">Contacts</Typography>
                </Stack>

                <Stack direction="row" justifyContent="center" gap={2} py={3}>
                    <Image src={facebookIcon} width={30} height={30} alt="icon" />
                    <Image src={linkedinIcon} width={30} height={30} alt="icon" />
                    <Image src={instagramIcon} width={30} height={30} alt="icon" />
                    <Image src={twitterIcon} width={30} height={30} alt="icon" />
                </Stack>

                <div className="border-b border-dashed"></div>

                <Stack direction="row" justifyContent="center" alignItems="center" gap={2} py={3}>
                    <Typography component={Link} href="/" color="white">&copy; 2024 PH HealthCare</Typography>
                    <Typography component={Link} href="/" color="white">All Rights Reserved</Typography>

                    <Typography
                        variant="h4"
                        component={Link}
                        href="/"
                        fontWeight={600}
                        color="white"
                    >
                        P<Box component="span" color="primary.main">H</Box> HealthCare
                    </Typography>

                    <Typography component={Link} href="/" color="white">Privacy Policy</Typography>
                    <Typography component={Link} href="/" color="white">Terms & Conditions</Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
