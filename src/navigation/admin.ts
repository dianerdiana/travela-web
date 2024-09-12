// ** Icons
export type SidenavItem = {
  isHeader?: boolean;
  title: string;
  icon?: string;
  href: string;
  subMenu?: boolean;
  subMenuItems?: SidenavItem[];
};

const navigation: SidenavItem[] = [
  {
    title: "DAILY USE",
    isHeader: true,
    href: "/",
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
