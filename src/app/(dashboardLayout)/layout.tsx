"use client";

import Dashboard from "@/components/dashboard/Dashboard";
import { isLoggedIn } from "@/services/auth.services";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    if (!isLoggedIn()) {
        return router.push("/login");
    };

    return (
        <Dashboard>{children}</Dashboard>
    );
};

export default DashboardLayout;
