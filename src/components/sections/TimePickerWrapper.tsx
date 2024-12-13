import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TTimePickerWrapperProps = {
    name: string;
    size?: "small" | "medium";
    placeholder?: string;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
};

const TimePickerWrapper = (
    {
        name,
        label,
        size = "small",
        required = false,
        fullWidth = true,
        sx = {},
    }: TTimePickerWrapperProps
) => {
    const { control, formState } = useFormContext();
    const isError = formState.errors[name] !== undefined;

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={dayjs(new Date().toDateString())}
            render={({ field: { onChange, value, name, ...field } }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        {...field}
                        timezone="system"
                        disablePast
                        label={label}
                        onChange={(time) => onChange(time)}
                        value={value || Date.now()}
                        slotProps={{
                            textField: {
                                required: required,
                                sx: sx,
                                fullWidth: fullWidth,
                                size: size,
                                variant: "outlined",
                                error: isError,
                                helperText: isError
                                    ? (formState.errors[name]?.message as string)
                                    : "",
                            }
                        }}
                    />
                </LocalizationProvider>
            )}
        />
    );
};

export default TimePickerWrapper;
