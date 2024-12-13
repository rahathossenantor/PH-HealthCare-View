import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import Modal from "./Modal";
import FormWrapper from "../sections/FormWrapper";
import { Button, Grid } from "@mui/material";
import DatePickerWrapper from "../sections/DatePickerWrapper";
import TimePickerWrapper from "../sections/TimePickerWrapper";
import dateFormatter from "@/utils/dateFormatter";
import timeFormatter from "@/utils/timeFormatter";

type TScheduleModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TScheduleModalProps) => {
    const handleSubmit = async (values: FieldValues) => {
        values.startDate = dateFormatter(values.startDate);
        values.endDate = dateFormatter(values.endDate);
        values.startTime = timeFormatter(values.startTime);
        values.endTime = timeFormatter(values.endTime);

        try {
        } catch (err: any) {
            toast.error(err.message);
            console.error(err.message);
        };
    };

    return (
        <Modal title="Create schedules" open={open} setOpen={setOpen}>
            <FormWrapper onSubmit={handleSubmit}>
                <Grid container spacing={2} sx={{ width: "400px" }}>
                    <Grid item md={12}>
                        <DatePickerWrapper
                            name="startDate"
                            label="Start Date"
                        />
                    </Grid>
                    <Grid item md={12}>
                        <DatePickerWrapper
                            name="endDate"
                            label="End Date"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TimePickerWrapper
                            name="startTime"
                            label="Start Time"
                        />
                    </Grid>
                    <Grid item md={6}>
                        <TimePickerWrapper
                            name="endTime"
                            label="End Time"
                        />
                    </Grid>
                </Grid>
                <Button type="submit" sx={{ mt: 2 }}>Create</Button>
            </FormWrapper>
        </Modal>
    );
};

export default ScheduleModal;
