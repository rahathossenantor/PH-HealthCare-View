"use client";

import DoctorInformation from "@/components/sections/DoctorInformation";
import AutoFileUploader from "@/components/ui/AutoFileUploader";
import { useGetMeQuery, useUpdateMeMutation } from "@/redux/api/usersAPI";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";

const Profile = () => {
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
        <Container>
            <Grid container spacing={3}>
                <Grid xs={12} md={4}>
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
                </Grid>
                <Grid xs={12} md={8}>
                    <DoctorInformation data={data} />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;
