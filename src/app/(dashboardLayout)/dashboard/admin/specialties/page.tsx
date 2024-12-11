"use client";

import SpecialtyModal from "@/components/ui/SpecialtyModal";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const Specialties = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsModalOpen(true)}>Create Specialty</Button>
                <SpecialtyModal
                    open={isModalOpen}
                    setOpen={setIsModalOpen}
                />
                <TextField size="small" placeholder="Search Specialty" />
            </Stack>
        </Box>
    );
};

export default Specialties;
