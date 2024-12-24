import { Box, Button, Card, CardActions, CardContent, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import PlaceIcon from "@mui/icons-material/Place";
import { baseServerApiUrl } from "@/constants/global.constants";
import Link from "next/link";

const doctors = [
    {
        "id": "0df004e7-96ab-45f9-b0c0-25f4b5d3f14a",
        "name": "Dr. Joseph",
        "email": "doctor@gmail.com",
        "profilePhoto": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732258340/ugnh3rdgt9q9lvnccgu9.png",
        "contactNumber": "+1234567890",
        "address": "123 Main St, Springfield",
        "registrationNumber": "0003",
        "experience": 10,
        "appointmentFee": 500,
        "qualification": "MBBS, MD",
        "currentWorkingPlace": "Springfield General Hospital",
        "designation": "Senior Consultant",
        "avgRating": 0,
        "isDeleted": false,
        "createdAt": "2024-11-22T06:55:32.278Z",
        "updatedAt": "2024-11-22T06:55:32.278Z",
        "doctorSpecialty": []
    },
    {
        "id": "bdf8735a-9d91-4e42-9eda-fca24214a19c",
        "name": "Maria",
        "email": "maria@gmail.com",
        "profilePhoto": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732258419/hoouz3iuzphrb6cfz185.png",
        "contactNumber": "+1234567890",
        "address": "123 Main St, Springfield",
        "registrationNumber": "0002",
        "experience": 8,
        "appointmentFee": 400,
        "qualification": "MBBS, MD",
        "currentWorkingPlace": "Springfield General Hospital",
        "designation": "Consultant",
        "avgRating": 0,
        "isDeleted": false,
        "createdAt": "2024-11-22T06:53:40.594Z",
        "updatedAt": "2024-11-22T06:53:40.594Z",
        "doctorSpecialty": []
    },
    {
        "id": "97dfe8d4-e8b7-4a4d-972a-dfed2bf63ebe",
        "name": "Dr. Joseph",
        "email": "joseph@gmail.com",
        "profilePhoto": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732258340/ugnh3rdgt9q9lvnccgu9.png",
        "contactNumber": "+1234567890",
        "address": "123 Main St, Springfield",
        "registrationNumber": "0001",
        "experience": 10,
        "appointmentFee": 500,
        "qualification": "MBBS, MD",
        "currentWorkingPlace": "Springfield General Hospital",
        "designation": "Senior Consultant",
        "avgRating": 0,
        "isDeleted": false,
        "createdAt": "2024-11-22T06:52:21.141Z",
        "updatedAt": "2024-11-22T06:52:21.141Z",
        "doctorSpecialty": []
    }
];

const TopDoctors = async () => {
    // const res = await fetch(`${baseServerApiUrl}/doctors`, {
    //     next: {
    //         revalidate: 30
    //     }
    // });
    // const { data: doctors } = await res.json();

    return (
        <Box sx={{
            py: 20,
            backgroundColor: "rgba(20, 20, 20, 0.1)",
            clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
        }}>
            <Box sx={{ textAlign: "center" }}>
                <Typography variant="h4" fontWeight={600}>Our Top Rated Doctors</Typography>
                <Typography component="p" fontSize={18}>Access to expert physicians and surgeons, advanced technologies and top-quality surgeries at your fingertips</Typography>
            </Box>

            <Container sx={{ margin: "30px auto", textAlign: "center" }}>
                <Grid container spacing={2}>
                    {
                        doctors?.map((doctor: any) => (
                            <Grid
                                key={doctor.id}
                                item
                                md={4}
                            >
                                <Card>
                                    <Image src={doctor.profilePhoto} height={500} width={500} alt="doctor" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h5">
                                            {doctor.name}
                                        </Typography>
                                        <Stack direction="row" justifyContent="space-between" mb={1}>
                                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                                <SchoolIcon /> {doctor.qualification}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                                <WorkIcon /> {doctor.designation}
                                            </Typography>
                                        </Stack>
                                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                            <PlaceIcon /> {doctor.address}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button>Book Now</Button>
                                        <Button variant="outlined">View Profile</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                <Button
                    variant="contained"
                    sx={{ margin: "10px 0" }}
                    LinkComponent={Link}
                    href="/doctors"
                >
                    View All Doctors
                </Button>
            </Container>
        </Box>
    );
};

export default TopDoctors;
