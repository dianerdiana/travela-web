"use client";

// React
import React from "react";

// Next
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/clsx/cn";

type NavigationItem = {
  title: string;
  icon: string;
  href: string;
};

const navigation: NavigationItem[] = [
  {
    title: "Home",
    icon: "/assets/icons/home.svg",
    href: "/home",
  },
  {
    title: "Search",
    icon: "/assets/icons/search.svg",
    href: "/search",
  },
  {
    title: "Schedule",
    icon: "/assets/icons/calendar-blue.svg",
    href: "schedule",
  },
  {
    title: "Profile",
    icon: "/assets/icons/user-flat.svg",
    href: "/admin",
  },
];

const BlankLayout: React.FC<{
  children: React.ReactNode;
  paddingBottom?: string;
}> = ({ children, paddingBottom = "120px" }) => {
  // Hook
  const pathname = usePathname();

  return (
    <section className={`container-float-nav bg-vista-500`} style={{ paddingBottom }}>
      <div className="flex flex-col gap-8 px-4">{children}</div>
      <div className="navigation-bar fixed bottom-0 z-50 max-w-[640px] w-full h-[85px] bg-white rounded-t-[25px] flex items-center justify-evenly py-[45px]">
        {navigation.map((nav) => (
          <Link
            href={nav.href}
            className={cn("menu", {
              "opacity-50": pathname !== nav.href,
            })}
            key={nav.href}
          >
            <div className="flex flex-col justify-center gap-1 w-fit">
              <div className="flex w-4 h-4 mx-auto overflow-hidden shrink-0 text-primary-500">
                <img src={nav.icon} alt="icon" />
              </div>
              <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">{nav.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlankLayout;
