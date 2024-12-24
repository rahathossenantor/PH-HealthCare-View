"use client";

import DoctorCard from "@/components/sections/DoctorCard";
import DashedLine from "@/components/ui/DashedLine";
import { useGetAllDoctorsQuery } from "@/redux/api/doctorsAPI";
import { Box, Container } from "@mui/material";

const Doctors = () => {
    const { data } = useGetAllDoctorsQuery({});

    return (
        <Container>
            <DashedLine />
            <Box sx={{ mt: 2, p: 3, bgcolor: "secondary.light" }}>
                {
                    data?.map((doctor: any, index: number) => (
                        <Box key={doctor.id}>
                            <DoctorCard doctor={doctor} />
                            {index === data.length - 1 ? null : <DashedLine />}
                        </Box>
                    ))
                }
            </Box>
        </Container>
    );
};

export default Doctors;
