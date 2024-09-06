"use client";

import { NavItemProps } from "@/navigation/admin";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

type SidebarProps = {
  navMenu: NavItemProps[];
};

export default function Sidebar({ navMenu }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="p-[30px] bg-[#FBFBFB] w-[270px] min-h-screen shrink-0 border-e-[1px]">
      <div className="fixed flex flex-col gap-[30px] w-[210px]">
        <div className="flex flex-row items-center justify-center nav-brand">
          <img src="/assets/logos/logo.svg" alt="logo" className="me-3" />
          <h1 className="text-xl font-extrabold">BrandLogo</h1>
        </div>
        <nav>
          <ul className="space-y-3">
            {navMenu.map((navItem) => (
              <li key={navItem.name}>
                <NavItem
                  name={navItem.name}
                  title={navItem.title}
                  href={navItem.href}
                  isHeader={navItem.isHeader}
                  icon={navItem.icon}
                  children={navItem.children}
                  isActive={pathname === navItem.href}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
