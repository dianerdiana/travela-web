"use client";

// React Imports
import React, { useRef, useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Thirdparty
import { Icon } from "@iconify/react";
import { cn } from "@/lib/clsx/cn";

// Type
import { navigation, type SidenavItem } from "@/navigation/admin";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(true);
  const toggleSideNav = () => setOpen((prev) => !prev);

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 border-e-[1px] ${
          open ? "-translate-x-full" : "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex flex-col h-full p-4 overflow-y-auto gap-7 bg-gray-50">
          <div className="absolute top-0 right-0 p-1">
            <button onClick={toggleSideNav} className="sm:hidden">
              <Icon icon="mdi:close" className="w-4 h-4" />
            </button>
          </div>
          <Link id="navbar-brand" href={"/"}>
            <div className="flex items-center justify-center shrink-0">
              <Image src={"/assets/logos/logo.svg"} alt="brand-logo" width={36} height={36} />
              <span className="text-xl font-extrabold ms-3">BrandLogo</span>
            </div>
          </Link>
          <nav>
            <ul className="space-y-2">
              {navigation.map((nav, idx) => (
                <li key={idx + 1}>
                  {nav.isHeader ? (
                    <SidenavMenuHeader title={nav.title} href={nav.href} />
                  ) : nav.subMenu ? (
                    <SidenavSubmenu pathname={pathname} {...nav} />
                  ) : (
                    <SidenavMenuItem active={nav.href === pathname} {...nav} />
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <div className="sm:ml-64">
        <header className="p-4 border-b-[1px]">
          <div className="flex justify-between">
            <div>
              <button
                onClick={toggleSideNav}
                className="p-2 border-2 rounded-md border-zinc-100 sm:hidden"
              >
                <img src="/assets/icons/nav-hamburger.svg" alt="hamburger" />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-xs text-gray-400 text-end">username</p>
                <p className="text-sm font-semibold text-end">Full Name</p>
              </div>
              <div>
                <Image
                  src={"/assets/photos/pfp2.png"}
                  alt="photo-profile"
                  width={46}
                  height={46}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    </>
  );
};

export default AdminLayout;

const SidenavMenuHeader = ({ title }: SidenavItem) => {
  return <h4 className="text-xs font-bold text-gray-400">{title}</h4>;
};

const SidenavMenuItem = ({ active, icon, title, href }: SidenavItem & { active: boolean }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 leading-10 rounded-full group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-200",
        {
          "bg-primary text-white": active,
        }
      )}
    >
      <Icon
        icon={icon ? icon : "mdi:professional-hexagon"}
        className="w-6 h-6 group-hover:text-white"
      />
      <span className="font-semibold ms-3 group-hover:text-white">{title}</span>
    </Link>
  );
};

const SidenavSubmenuItem = ({ active, icon, title, href }: SidenavItem & { active: boolean }) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center px-3 leading-10 rounded-full group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-200",
        {
          "bg-primary text-white": active,
        }
      )}
    >
      <Icon
        icon={icon ? icon : "mdi:professional-hexagon"}
        className="w-4 h-4 group-hover:text-white"
      />
      <span className="font-semibold ms-3 group-hover:text-white">{title}</span>
    </Link>
  );
};

const SidenavSubmenu = ({
  href,
  icon,
  title,
  pathname,
  subMenuItems,
}: SidenavItem & { pathname: string }) => {
  // ** State
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSidenavSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-1 rounded-full">
      <button
        onClick={toggleSidenavSubMenu}
        className={cn(
          "w-full flex items-center px-3 leading-10 rounded-full group hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary-200",
          {
            "bg-primary text-white": href.includes("pathname"),
          }
        )}
      >
        <Icon
          icon={icon ? icon : "mdi:professional-hexagon"}
          className="w-6 h-6 group-hover:text-white"
        />
        <span className="font-semibold ms-3 group-hover:text-white">{title}</span>

        <Icon
          icon="ri:arrow-up-s-line"
          className={cn(
            "w-6 h-6 group-hover:text-white ms-auto transition-transform duration-200",
            {
              "rotate-180": isOpen,
            }
          )}
        />
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out`}
      >
        <ul>
          {subMenuItems?.map((nav, idx) => (
            <li key={idx + 1}>
              <SidenavSubmenuItem active={nav.href === pathname} {...nav} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
