import Dashboard from "@/components/dashboard/Dashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dashboard>{children}</Dashboard>
    );
};

export default DashboardLayout;
