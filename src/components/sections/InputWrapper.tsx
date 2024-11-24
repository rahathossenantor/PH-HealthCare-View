import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputWrapperProps = {
    name: string;
    required?: boolean;
    label: string;
    type?: string;
    fullWidth?: boolean;
};

const InputWrapper = ({
    name,
    label,
    type = "text",
    fullWidth = true
}: TInputWrapperProps
) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    label={label}
                    placeholder={label}
                    variant="outlined"
                    size="small"
                    type={type}
                    fullWidth={fullWidth}
                    error={!!error?.message}
                    helperText={error?.message}
                />
            )}
        />
    );
};

export default InputWrapper;
