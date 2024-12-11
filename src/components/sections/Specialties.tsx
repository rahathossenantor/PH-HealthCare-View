import { baseServerApiUrl } from "@/constants/global.constants";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type specialty = {
    id: string;
    title: string;
    icon: string;
};

// const specialties: specialty[] = [
//     {
//         "id": "9eb1a068-66d0-42b1-b1c7-cea2151646a1",
//         "title": "Cardiology",
//         "icon": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732013400/kneeetgi87kidpa9irtm.svg"
//     },
//     {
//         "id": "bdc0cc7e-86b1-46c6-becf-b3c94aa7e4b1",
//         "title": "Neurology",
//         "icon": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732013460/dky9goi5czkm9vt3nxnb.svg"
//     },
//     {
//         "id": "169f0489-032c-43b0-b9d9-41c621477d70",
//         "title": "Urology",
//         "icon": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732013504/qifnmxvm6ihb3xpsodpy.svg"
//     },
//     {
//         "id": "8c247278-4715-4eca-b235-ebf9b836f6b5",
//         "title": "Orthopedic",
//         "icon": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732013539/l8ujplccgumjup0khctk.svg"
//     },
//     {
//         "id": "060f5833-66a0-4146-b435-35405189409f",
//         "title": "Dentist",
//         "icon": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732013577/nqyoxsdc0ltbozgyhyxm.svg"
//     },
//     {
//         "id": "85bc4445-13f3-42e6-a213-2554970b48bc",
//         "title": "Ophthalmology",
//         "icon": "https://res.cloudinary.com/dboonmy3k/image/upload/v1732013624/czzorbv9apopq9tvxekp.svg"
//     }
// ];

const Specialties = async () => {
    const res = await fetch(`${baseServerApiUrl}/specialties`, {
        next: {
            revalidate: 30
        }
    });
    const { data: specialties } = await res.json();

    return (
        <Container>
            <Box py={5} sx={{ textAlign: "center" }}>
                <Box sx={{ textAlign: "start" }}>
                    <Typography variant="h4" fontWeight={600}>Explore Treatments Across Specialties</Typography>
                    <Typography component="p" fontSize={18}>Find experienced doctors across all specialties</Typography>
                </Box>
                <Stack direction="row" gap={4} py={2}>
                    {specialties.slice(0, 6).map((specialty: specialty) => (
                        <Box
                            key={specialty.id}
                            sx={{
                                flex: 1,
                                padding: "30px 0",
                                border: "1px solid #ccc",
                                backgroundColor: "rgba(245, 245, 245, 1)",
                                borderRadius: 2,
                                cursor: "pointer",
                                "& img": {
                                    width: "50px",
                                    height: "50px",
                                    margin: "0 auto"
                                },
                                "&:hover": {
                                    border: "1px solid #000"
                                }
                            }}
                        >
                            <Image src={specialty.icon} alt={specialty.title} width={50} height={50} />
                            <Typography component="p" mt={1} fontWeight={600}>{specialty.title}</Typography>
                        </Box>
                    ))}
                </Stack>
                <Button variant="contained">View All Specialties</Button>
            </Box>
        </Container>
    );
};

export default Specialties;
