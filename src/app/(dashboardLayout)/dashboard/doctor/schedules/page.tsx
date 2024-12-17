"use client";

import DoctorSchedulesModal from "@/components/ui/DoctorSchedulesModal";
import { useGetDoctorsAllSchedulesQuery } from "@/redux/api/doctorSchedulesAPI";
import dateFormatter from "@/utils/dateFormatter";
import { Box, Button, IconButton, Pagination } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Schedules = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [doctorSchedules, setDoctorSchedules] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(3);

    const query: Record<string, any> = {};
    query["page"] = page;
    query["limit"] = limit;

    const { data, isLoading } = useGetDoctorsAllSchedulesQuery(query);

    let pageCount: number;

    if (data?.meta?.total) {
        pageCount = Math.ceil(data?.meta.total / limit);
    };

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    useEffect(() => {
        const structuredSchedules = data?.data?.map((schedule: any) => ({
            id: schedule.schedule.id,
            startDate: dateFormatter(schedule.schedule.startDateTime),
            endDate: dateFormatter(schedule.schedule.endDateTime),
            startTime: dayjs(schedule.schedule.startDateTime).format("hh:mm A"),
            endTime: dayjs(schedule.schedule.endDateTime).format("hh:mm A"),
        }));
        setDoctorSchedules(structuredSchedules);
    }, [data]);

    const handleDelete = async (id: string) => { };

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
            <Button onClick={() => setIsModalOpen(true)}>Create Schedule</Button>
            <DoctorSchedulesModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
            />
            {
                !isLoading
                    ? (
                        <DataGrid
                            hideFooterPagination
                            rows={doctorSchedules}
                            columns={columns}
                            sx={{ border: 0, margin: 4 }}
                            slots={{
                                footer: () => {
                                    return (
                                        <Box
                                            sx={{
                                                mb: 2,
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Pagination
                                                color="primary"
                                                count={pageCount}
                                                page={page}
                                                onChange={handleChange}
                                            />
                                        </Box>
                                    );
                                },
                            }}
                        />
                    )
                    : (
                        <h1>Loading...!</h1>
                    )
            }
        </Box>
    );
};

export default Schedules;
