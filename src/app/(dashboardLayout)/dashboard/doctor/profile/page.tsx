"use client";

import DoctorInformation from "@/components/sections/DoctorInformation";
import AutoFileUploader from "@/components/ui/AutoFileUploader";
import UpdateDoctorProfileDialog from "@/components/ui/UpdateDoctorProfileDialog";
import { useGetMeQuery, useUpdateMeMutation } from "@/redux/api/usersAPI";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Container } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { useState } from "react";

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { data, isLoading } = useGetMeQuery({});
    const [updateMe, { isLoading: updateMeLoading }] =
        useUpdateMeMutation();

    const fileUploadHandler = (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("data", JSON.stringify({}));

        updateMe(formData);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    };

    return (
        <>
            <UpdateDoctorProfileDialog
                open={isModalOpen}
                setOpen={setIsModalOpen}
                data={data}
            />
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                height: 300,
                                width: "100%",
                                overflow: "hidden",
                                borderRadius: 1,
                            }}
                        >
                            <Image
                                height={300}
                                width={400}
                                src={data?.profilePhoto}
                                alt="Profile Photo"
                            />
                        </Box>

                        {
                            updateMeLoading ? (
                                <p>Uploading...</p>
                            ) : (
                                <AutoFileUploader
                                    name="file"
                                    label="Upload profile photo"
                                    icon={<CloudUploadIcon />}
                                    onFileUpload={fileUploadHandler}
                                    variant="text"
                                />
                            )
                        }
                        <Button
                            fullWidth
                            endIcon={<ModeEditIcon />}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Edit Profile
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <DoctorInformation data={data} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default Profile;
