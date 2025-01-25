"use client";

import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import VideocamIcon from "@mui/icons-material/Videocam";
import Link from "next/link";
import { useGetMyAppointmentsQuery } from "@/redux/api/appointmentAPI";
import dateFormatter from "@/utils/dateFormatter";
import { getTimeIn12HourFormat } from "@/components/ui/MultipleSelectInput";

const PatientAppointments = () => {
    const { data, isLoading } = useGetMyAppointmentsQuery({});
    const appointments = data?.data;

    const columns: GridColDef[] = [
        {
            field: "name",
            headerName: "Patient Name",
            flex: 1,
            renderCell: ({ row }) => {
                return row?.patient?.name;
            },
        },
        {
            field: "contactNumber",
            headerName: "Contact Number",
            flex: 1,
            renderCell: ({ row }) => {
                return row?.patient?.contactNumber;
            },
        },
        {
            field: "appointmentDate",
            headerName: "Appointment Date",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: ({ row }) => {
                return dateFormatter(row.schedule.startDateTime);
            },
        },
        {
            field: "appointmentTime",
            headerName: "Appointment Time",
            headerAlign: "center",
            align: "center",
            flex: 1,
            renderCell: ({ row }) => {
                return getTimeIn12HourFormat(row?.schedule?.startDateTime);
            },
        },

        {
            field: "paymentStatus",
            headerName: "Payment Status",
            flex: 1,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "action",
            headerName: "Join",
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <Link href={`/video?videoCallId=${row?.videoCallingId}`}>
                        <IconButton>
                            <VideocamIcon />
                        </IconButton>
                    </Link>
                );
            },
        },
    ];

    return (
        <Box>
            {
                !isLoading ? (
                    <Box my={2}>
                        <DataGrid
                            rows={appointments ?? []}
                            columns={columns}
                            loading={isLoading}
                        />
                    </Box>
                ) : (
                    <h1>Loading.....</h1>
                )
            }
        </Box>
    );
};

export default PatientAppointments;
