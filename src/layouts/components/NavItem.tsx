import React from "react";
import type { NavItemProps } from "@/navigation/admin";
import cn from "classnames";
import Link from "next/link";

const NavHeader = React.memo(({ name }: NavItemProps) => {
  return <h2 className="text-[#A5ABB2] font-bold text-xs">{name}</h2>;
});

const NavItem = (props: NavItemProps & { isActive: boolean }) => {
  const { name, href, icon: Icon, isHeader, isActive } = props;
  if (isHeader) return <NavHeader name={name} />;

  const linkClasses = cn(
    "flex flex-row items-center h-[44px] rounded-full p-[10px_16px] group hover:bg-blue-300",
    {
      "bg-[#2B82FE]": isActive,
    }
  );

  const iconClasses = cn("w-6 h-6 group-hover:stroke-white", {
    "stroke-white": isActive,
  });

  const spanClasses = cn("ms-[14px] group-hover:text-white font-semibold", {
    "text-white": isActive,
  });

  return (
    <Link href={href || "#"} className={linkClasses}>
      {Icon && <Icon className={iconClasses} />} <span className={spanClasses}>{name}</span>
    </Link>
  );
};

export default React.memo(NavItem);
