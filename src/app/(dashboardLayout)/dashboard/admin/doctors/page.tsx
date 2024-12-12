"use client";

import DoctorDialog from "@/components/ui/DoctorDialog";
import { Box, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const Doctors = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsDialogOpen(true)}>Create Doctor</Button>
                <DoctorDialog
                    open={isDialogOpen}
                    setOpen={setIsDialogOpen}
                />
                <TextField size="small" placeholder="Search Specialty" />
            </Stack>
        </Box>
    );
};

export default Doctors;
