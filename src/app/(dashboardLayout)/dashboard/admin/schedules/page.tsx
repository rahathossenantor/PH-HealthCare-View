"use client";

import ScheduleModal from "@/components/ui/ScheduleModal";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Schedules = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>Create Schedules</Button>
            <ScheduleModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
            />
        </Box>
    );
};

export default Schedules;
