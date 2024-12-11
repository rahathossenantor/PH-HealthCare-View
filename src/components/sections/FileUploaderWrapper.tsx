import * as React from "react";
import { SxProps } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TFileUploaderWrapperProps = {
    name: string;
    label?: string;
    sx?: SxProps;
};

const FileUploaderWrapper = ({ name, label = "", sx = {} }: TFileUploaderWrapperProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, name, ...field } }) => {
                return (
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                        sx={sx}
                    >
                        {label || "Upload file"}
                        <Input
                            {...field}
                            onChange={(e) => onChange((e?.target as HTMLInputElement)?.files?.[0])}
                            value={value?.fileName}
                            type={name}
                            sx={{ display: "none" }}
                        />
                    </Button>
                )
            }}
        />
    );
};

export default FileUploaderWrapper;
