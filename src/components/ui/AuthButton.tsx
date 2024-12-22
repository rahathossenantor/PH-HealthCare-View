import { getUser, logoutUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const router = useRouter();
    const user = getUser();

    return (
        <>
            {
                user?.email
                    ? <Button color="error" onClick={() => {
                        logoutUser(router);
                    }}>Logout</Button>
                    : <Button component={Link} href="/login">Login</Button>
            }
        </>
    );
};

export default AuthButton;
