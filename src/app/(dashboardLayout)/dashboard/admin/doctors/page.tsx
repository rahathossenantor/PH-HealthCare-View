"use client";

import DoctorDialog from "@/components/ui/DoctorDialog";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorsAPI";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const Doctors = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { data, isLoading } = useGetAllDoctorsQuery({});

    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "contactNumber", headerName: "Contact No", flex: 1 },
        {
            field: "action",
            headerName: "Delete",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            )
        },
    ];

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

            {
                !isLoading
                    ? (<DataGrid
                        rows={data}
                        columns={columns}
                        sx={{ border: 0, margin: 4 }}
                    />)
                    : (
                        <h1>Loading...!</h1>
                    )
            }
        </Box>
    );
};

export default Doctors;
