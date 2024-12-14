"use client";

import ScheduleModal from "@/components/ui/ScheduleModal";
import { useGetAllSchedulesQuery } from "@/redux/api/schedulesAPI";
import dateFormatter from "@/utils/dateFormatter";
import { Box, Button, IconButton } from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const Schedules = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [schedules, setSchedules] = useState<any>([]);

    const { data, isLoading } = useGetAllSchedulesQuery({});

    const handleDelete = async (id: string) => {
        try {
        } catch (err: any) {
            toast.error(err.message);
            console.error(err.message);
        };
    };

    useEffect(() => {
        const structuredSchedules = data?.data?.map((schedule: any) => ({
            id: schedule.id,
            startDate: dateFormatter(schedule.startDateTime),
            endDate: dateFormatter(schedule.endDateTime),
            startTime: dayjs(schedule.startDateTime).format("hh:mm A"),
            endTime: dayjs(schedule.endDateTime).format("hh:mm A"),
        }));
        setSchedules(structuredSchedules);
    }, [data?.data]);

    const columns: GridColDef[] = [
        { field: "startDate", headerName: "Start Date", flex: 1 },
        { field: "endDate", headerName: "End Date", flex: 1 },
        { field: "startTime", headerName: "Start Time", flex: 1 },
        { field: "endTime", headerName: "End Time", flex: 1 },
        {
            field: "action",
            headerName: "Delete",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: (params) => (
                <IconButton
                    onClick={() => handleDelete(params.row.id)}
                    aria-label="delete"
                >
                    <DeleteIcon />
                </IconButton>
            )
        },
    ];

    return (
        <Box>
            <Button onClick={() => setIsModalOpen(true)}>Create Schedules</Button>
            <ScheduleModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
            />
            {
                !isLoading
                    ? (<DataGrid
                        rows={schedules}
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

export default Schedules;
