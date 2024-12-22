import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import decodeJwtToken from "./utils/decodeJwtToken";

const authRoutes = ["/login", "/register"];
const commonPrivateRoutes = ["/dashboard", "/dashboard/change-password"];
const roleBasedPrivateRoutes = {
    PATIENT: [/^\/dashboard\/patient/],
    DOCTOR: [/^\/dashboard\/doctor/],
    ADMIN: [/^\/dashboard\/admin/],
    SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

type TRole = keyof typeof roleBasedPrivateRoutes;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const accessToken = cookies().get("accessToken")?.value;

    if (!accessToken) {
        if (authRoutes.includes(pathname)) {
            return NextResponse.next();
        };
        return NextResponse.redirect(new URL("/login", request.url));
    };

    if (accessToken && commonPrivateRoutes.includes(pathname)) {
        return NextResponse.next();
    };

    let decodedData = null;
    if (accessToken) {
        decodedData = decodeJwtToken(accessToken) as any;
    };
    const role = decodedData?.role;

    if (role && roleBasedPrivateRoutes[role as TRole]) {
        const routes = roleBasedPrivateRoutes[role as TRole];
        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        };
    };

    return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
    matcher: ["/login", "/register", "/dashboard/:path*"],
};
