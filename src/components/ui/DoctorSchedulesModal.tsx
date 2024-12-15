import { useState } from "react";
import Modal from "./Modal";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import LoadingButton from "@mui/lab/LoadingButton";
import { useGetAllSchedulesQuery } from "@/redux/api/schedulesAPI";
import MultipleSelectInput from "./MultipleSelectInput";
import { Stack } from "@mui/material";

type TDoctorSchedulesModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorSchedulesModal = ({ open, setOpen }: TDoctorSchedulesModalProps) => {
    // const [selectedDate, setSelectedDate] = useState(
    //     dayjs(new Date()).toISOString()
    // );
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);
    const query: Record<string, any> = {};

    if (!!selectedDate) {
        query["startDateTime"] = dayjs(selectedDate).hour(0).minute(0).millisecond(0).toISOString();
        query["endDateTime"] = dayjs(selectedDate).hour(23).minute(59).millisecond(999).toISOString();
    };

    const { data, isLoading } = useGetAllSchedulesQuery(query);

    const handleSubmit = async () => { };

    return (
        <Modal title="Create schedules" open={open} setOpen={setOpen}>
            <Stack direction="column" spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label=""
                        disablePast
                        sx={{ width: "100%" }}
                        value={dayjs(selectedDate)}
                        onChange={(newValue) =>
                            setSelectedDate(dayjs(newValue).toISOString())
                        }
                    />
                </LocalizationProvider>
                <MultipleSelectInput
                    schedules={data?.data || []}
                    selectedScheduleIds={selectedScheduleIds}
                    setSelectedScheduleIds={setSelectedScheduleIds}
                    disabled={!selectedDate || isLoading}
                />
                <LoadingButton
                    size="small"
                    onClick={handleSubmit}
                    loading={false}
                    loadingIndicator="Submitting…"
                    variant="outlined"
                >
                    Submit
                </LoadingButton>
            </Stack>
        </Modal>
    );
};

export default DoctorSchedulesModal;
