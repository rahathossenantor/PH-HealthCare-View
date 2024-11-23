import { clearUser, getUser } from "@/services/auth.services";
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
                        clearUser();
                        router.refresh();
                    }}>Logout</Button>
                    : <Button component={Link} href="/login">Login</Button>
            }
        </>
    );
};

export default AuthButton;
