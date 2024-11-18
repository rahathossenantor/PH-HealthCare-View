import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
    return (
        <Container>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                py={2}
            >
                <Typography
                    variant="h4"
                    component={Link}
                    href="/"
                    fontWeight={600}
                >
                    P<Box component="span" color="primary.main">H</Box> HealthCare
                </Typography>

                <Stack
                    direction="row"
                    gap={4}
                    justifyContent="space-between"
                >
                    <Typography component={Link} href="/">Home</Typography>
                    <Typography component={Link} href="/">Heath Plans</Typography>
                    <Typography component={Link} href="/">Medicines</Typography>
                    <Typography component={Link} href="/">Diagnostics</Typography>
                    <Typography component={Link} href="/">Contacts</Typography>
                </Stack>
                <Button component={Link} href="/login">Login</Button>
            </Stack>
        </Container>
    );
};

export default Navbar;
