import { jwtDecode } from "jwt-decode";

const decodeJwtToken = (token: string) => {
    return jwtDecode(token);
};

export default decodeJwtToken;
