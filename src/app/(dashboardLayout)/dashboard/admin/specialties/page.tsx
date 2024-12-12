"use client";

import SpecialtyModal from "@/components/ui/SpecialtyModal";
import { useDeleteSpecialtyMutation, useGetAllSpecialtiesQuery } from "@/redux/api/specialtiesAPI";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const Specialties = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, isLoading } = useGetAllSpecialtiesQuery({});
    const [deleteSpecialty] = useDeleteSpecialtyMutation({});

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteSpecialty(id).unwrap();

            if (res?.id) {
                toast.success("Specialty deleted successfully!");
            };
        } catch (err: any) {
            toast.error(err.message);
            console.error(err.message);
        };
    };

    const columns: GridColDef[] = [
        { field: "title", headerName: "Title", width: 400 },
        {
            field: "icon",
            headerName: "Icon",
            flex: 1,
            renderCell: (params) => (
                <Box sx={{ width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        src={params.row.icon}
                        alt={params.row.title}
                        width={30}
                        height={30}
                    />
                </Box>
            )
        },
        {
            field: "action",
            headerName: "Delete",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <IconButton onClick={() => handleDelete(params.row.id)} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            )
        },
    ];

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
            {
                !isLoading
                    ? (<DataGrid
                        rows={data}
                        columns={columns}
                        hideFooter
                        sx={{ border: 0, margin: 4 }}
                    />)
                    : (
                        <h1>Loading...!</h1>
                    )
            }
        </Box>
    );
};

export default Specialties;
