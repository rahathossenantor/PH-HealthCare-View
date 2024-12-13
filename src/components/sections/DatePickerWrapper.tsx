import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TDatePickerWrapperProps = {
    name: string;
    size?: "small" | "medium";
    placeholder?: string;
    label?: string;
    required?: boolean;
    fullWidth?: boolean;
    sx?: SxProps;
};

const DatePickerWrapper = (
    {
        name,
        label,
        size = "small",
        required = false,
        fullWidth = true,
        sx = {},
    }: TDatePickerWrapperProps
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
                    <DesktopDatePicker
                        {...field}
                        timezone="system"
                        disablePast
                        label={label}
                        onChange={(date) => onChange(date)}
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

export default DatePickerWrapper;
