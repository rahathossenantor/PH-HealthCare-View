import { TRole } from "@/types/types.global";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PersonIcon from "@mui/icons-material/Person";
import TryIcon from "@mui/icons-material/Try";

export type TMenuItem = {
    path: string;
    title: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; };
    child?: TMenuItem[];
};

const generateSidebarItems = (role: TRole): TMenuItem[] => {
    const menuItems: TMenuItem[] = [
        {
            title: "Profile",
            path: `${role}/profile`,
            icon: PersonIcon,
        }
    ];

    switch (role) {
        case "super_admin":
            menuItems.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Manage Users",
                    path: `${role}/manage-users`,
                    icon: GroupIcon,
                },
            );
            break;

        case "admin":
            menuItems.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Specialties",
                    path: `${role}/specialties`,
                    icon: TryIcon,
                },
                {
                    title: "Doctors",
                    path: `${role}/doctors`,
                    icon: MedicalInformationIcon,
                },
                {
                    title: "Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Reviews",
                    path: `${role}/reviews`,
                    icon: ReviewsIcon,
                }
            );
            break;

        case "doctor":
            menuItems.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Appointments",
                    path: `${role}/appointment`,
                    icon: CalendarMonthIcon,
                }
            );
            break;

        case "patient":
            menuItems.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Appointments",
                    path: `${role}/appointments`,
                    icon: DashboardIcon,
                },
                {
                    title: "Prescriptions",
                    path: `${role}/prescriptions`,
                    icon: DashboardIcon,
                },
                {
                    title: "Payment History",
                    path: `${role}/payment-history`,
                    icon: DashboardIcon,
                }
            );
            break;

        default:
            break;
    };

    return menuItems;
};

export default generateSidebarItems;
