"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import KeyIcon from "@mui/icons-material/Key";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import FormWrapper from "@/components/sections/FormWrapper";
import InputWrapper from "@/components/sections/InputWrapper";
import { useChangePasswordMutation } from "@/redux/api/authAPI";

const validationSchema = z.object({
    oldPassword: z.string().min(5, "Must be at least 5 characters long!"),
    newPassword: z.string().min(5, "Must be at least 5 characters long!"),
});

const ChangePassword = () => {
    const router = useRouter();
    const [changePassword] = useChangePasswordMutation();

    const onSubmit = async (values: FieldValues) => {
        try {
            const res = await changePassword(values);
            if (res?.data?.success) {
                toast.success(res?.data?.message);
                router.push("/dashboard/profile");
            } else {
                toast.error(res?.data?.message);
            };
        } catch (error: any) {
            toast.error(error.message);
            console.error(error);
        };
    };

    return (
        <Box
            sx={{
                px: 4,
                py: 2,
                maxWidth: 600,
                width: "100%",
                boxShadow: 1,
                borderRadius: 1,
                mx: "auto",
                mt: {
                    xs: 2,
                    md: 5,
                },
            }}
        >
            <Stack alignItems="center" justifyContent="center">
                <Box
                    sx={{
                        "& svg": {
                            width: 100,
                            height: 100,
                        },
                    }}
                >
                    <KeyIcon sx={{ color: "primary.main" }} />
                </Box>
                <Typography variant="h5" fontWeight={600} sx={{ mb: 2, mt: -1.5 }}>
                    Change Password
                </Typography>
            </Stack>
            <FormWrapper
                onSubmit={onSubmit}
                defaultValues={{ oldPassword: "", newPassword: "" }}
                resolver={zodResolver(validationSchema)}
            >
                <Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <InputWrapper
                            name="oldPassword"
                            type="password"
                            label="Old Password"
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <InputWrapper
                            name="newPassword"
                            type="password"
                            label="New Password"
                            sx={{ mb: 2 }}
                        />
                    </Grid>
                </Grid>

                <Button type="submit" sx={{ width: "100%", my: 2 }}>
                    change Password
                </Button>
            </FormWrapper>
        </Box>
    );
};

export default ChangePassword;
