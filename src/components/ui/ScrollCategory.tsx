"use client";

import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesAPI";
import { Box, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ScrollCategory = ({ specialty }: any) => {
    const router = useRouter();
    const { data } = useGetAllSpecialtiesQuery({});
    const [value, setValue] = useState(specialty || "");

    const handleChange = (_event: React.SyntheticEvent, specialty: string) => {
        setValue(specialty);
        router.push(`/doctors?specialty=${specialty}`);
    };

    return (
        <Box sx={{ maxWidth: "100%", bgcolor: "background.paper" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                {
                    data?.map((item: any) => (
                        <Tab
                            key={item.id}
                            label={item.title}
                            value={item.title}
                            sx={{ fontWeight: "bold" }}
                        />
                    ))
                }
            </Tabs>
        </Box>
    );
};

export default ScrollCategory;
