import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import generateSidebarItems from "@/utils/generateSidebarItems";
import SidebarItem from "./SidebarItem";
import { useEffect, useState } from "react";
import { getUser } from "@/services/auth.services";
import { TRole } from "@/types/types.global";

const Sidebar = () => {
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const { role } = getUser();
        setUserRole(role);
    }, []);

    return (
        <>
            <Box component={Link} href="/">
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                    sx={{
                        py: 1,
                        px: 1
                    }}
                >
                    <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
                    <Typography variant="h5">HealthCare</Typography>
                </Stack>
            </Box>
            <List>
                {generateSidebarItems(userRole as TRole).map((sidebarItem, idx) => (
                    <SidebarItem key={idx} idx={idx} item={sidebarItem} />
                ))}
            </List>
        </>
    );
};

export default Sidebar;
