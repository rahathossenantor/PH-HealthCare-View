import Link from "next/link";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { TMenuItem } from "@/utils/generateSidebarItems";
import { usePathname } from "next/navigation";

type TSidebarItemProps = {
    item: TMenuItem;
    idx: number;
};

const SidebarItem = ({ item, idx }: TSidebarItemProps) => {
    const path = `/dashboard/${item.path}`;
    const pathname = usePathname();

    return (
        <Link href={path}>
            <ListItem
                key={idx}
                disablePadding
                sx={{
                    ...(pathname === path
                        ? { borderRight: "3px solid #1586FD", "& svg": { color: "#1586FD" } }
                        : {})
                }}
            >
                <ListItemButton>
                    <ListItemIcon>
                        {
                            item?.icon && <item.icon />
                        }
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            </ListItem>
        </Link>
    );
};

export default SidebarItem;
