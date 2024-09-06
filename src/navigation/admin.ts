import type { IconType } from "react-icons";

// ** Icons
import { FiHome, FiTag } from "react-icons/fi";

export type NavItemProps = {
  isHeader?: boolean;
  title?: string;
  name: string;
  href?: string;
  icon?: IconType;
  children?: NavItemProps;
};

const navigation: NavItemProps[] = [
  {
    name: "DAILY USE",
    isHeader: true,
  },
  {
    title: "Dashboard",
    name: "Dashboard",
    icon: FiHome,
    href: "/admin/dashboard",
  },
  {
    title: "Category",
    name: "Category",
    icon: FiTag,
    href: "/admin/category",
  },
];

export default navigation;
