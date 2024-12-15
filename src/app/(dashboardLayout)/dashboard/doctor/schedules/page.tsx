"use client";

import DoctorSchedulesModal from "@/components/ui/DoctorSchedulesModal";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Schedules = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
            <DoctorSchedulesModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
            />
        </Box>
    );
};

export default Schedules;
