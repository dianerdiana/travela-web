// ** Icons
import { Icon } from "@iconify/react";

export type SideNavItem = {
  isHeader?: boolean;
  title: string;
  icon?: string;
  href?: string;
  subMenu?: boolean;
  subMenuItems?: SideNavItem[];
};

const navigation: SideNavItem[] = [
  {
    title: "DAILY USE",
    isHeader: true,
  },
  {
    title: "Dashboard",
    icon: "mdi:home",
    href: "/admin/dashboard",
  },
  {
    title: "Category",
    icon: "mdi:tag",
    href: "/admin/category",
  },
];

export default navigation;
