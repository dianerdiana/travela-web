import { BoxIcon, GridIcon } from "@/icons";
import { NavItem } from "./type";

export const mainItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <BoxIcon />,
    name: "Category",
    path: "/admin/category",
  },
];
