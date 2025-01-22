"use client";

import { useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesAPI";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const ScrollCategory = () => {
    const { data } = useGetAllSpecialtiesQuery({});
    const [value, setValue] = useState("");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
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
                {data?.map((item: any) => (
                    <Tab key={item.id} label={item.title} value={item.title} />
                ))}
            </Tabs>
        </Box>
    );
};

export default ScrollCategory;
