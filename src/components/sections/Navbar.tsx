"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = () => {
    const AuthButton = dynamic(() => import("../ui/AuthButton"), { ssr: false });

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
                <AuthButton />
            </Stack>
        </Container>
    );
};

export default Navbar;
