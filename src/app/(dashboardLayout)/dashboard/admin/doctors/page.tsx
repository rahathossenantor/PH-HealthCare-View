"use client";

import DoctorDialog from "@/components/ui/DoctorDialog";
import { useDeleteDoctorMutation, useGetAllDoctorsQuery } from "@/redux/api/doctorsAPI";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useDebouncedSearch } from "@/redux/hooks";
import { toast } from "sonner";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";

const Doctors = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const query: Record<string, any> = {};

    const debouncedSearchTerm = useDebouncedSearch({ searchTerm, delay: 600 });
    if (debouncedSearchTerm) {
        query.searchTerm = searchTerm;
    };

    const { data, isLoading } = useGetAllDoctorsQuery(query);
    const [deleteDoctor] = useDeleteDoctorMutation();

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteDoctor(id).unwrap();

            if (res?.id) {
                toast.success("Doctor deleted successfully!");
            };
        } catch (err: any) {
            toast.error(err.message);
            console.error(err.message);
        };
    };

    const columns: GridColDef[] = [
        { field: "name", headerName: "Name", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "contactNumber", headerName: "Contact No", flex: 1 },
        { field: "qualification", headerName: "Qualification", flex: 1 },
        { field: "appointmentFee", headerName: "Fee", flex: 1 },
        {
            field: "",
            headerName: "Actions",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    <IconButton
                        onClick={() => handleDelete(params.row.id)}
                        aria-label="delete"
                    >
                        <DeleteIcon />
                    </IconButton>
                    <Link href={`/dashboard/admin/doctors/edit/${params.row.id}`}>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                    </Link>
                </Stack>
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
                <TextField
                    size="small"
                    placeholder="Search Specialty"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Stack>

            {
                !isLoading
                    ? (
                        <DataGrid
                            rows={data}
                            columns={columns}
                            sx={{ border: 0, margin: 4 }}
                        />
                    )
                    : (
                        <h1>Loading...!</h1>
                    )
            }
        </Box>
    );
};

export default Doctors;
