import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TInputWrapperProps = {
    name: string;
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
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    variant="outlined"
                    size="small"
                    type={type}
                    fullWidth={fullWidth}
                />
            )}
        />
    );
};

export default InputWrapper;
