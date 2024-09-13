// ** Icons
export type SidenavItem = {
  isHeader?: boolean;
  title: string;
  icon?: string;
  href: string;
  subMenu?: boolean;
  subMenuItems?: SidenavItem[];
};

export const navigation: SidenavItem[] = [
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
  {
    title: "Category Sub",
    icon: "mdi:tag",
    href: "/admin/category",
    subMenu: true,
    subMenuItems: [
      {
        title: "Item 1",
        icon: "mdi:circle-outline",
        href: "/admin/item-1",
      },
      {
        title: "Item 2",
        icon: "mdi:circle-outline",
        href: "/admin/item-2",
      },
    ],
  },
];
