"use client";

import DoctorCard from "@/components/sections/DoctorCard";
import DashedLine from "@/components/ui/DashedLine";
import ScrollCategory from "@/components/ui/ScrollCategory";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorsAPI";
import { Box, Container } from "@mui/material";
import { FadeLoader } from "react-spinners";

const Doctors = ({ searchParams }: any) => {
    const { data, isLoading } = useGetAllDoctorsQuery(searchParams);

    return (
        <Container>
            <DashedLine />
            <ScrollCategory specialty={searchParams.specialty} />
            <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
                {
                    !isLoading
                        ? (
                            data?.map((doctor: any, index: number) => (
                                <Box key={doctor.id}>
                                    <DoctorCard doctor={doctor} />
                                    {index === data.length - 1 ? null : <DashedLine />}
                                </Box>
                            ))
                        )
                        : <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                            <FadeLoader color="#3f51b5" />
                        </Box>
                }
            </Box>
        </Container>
    );
};

export default Doctors;
