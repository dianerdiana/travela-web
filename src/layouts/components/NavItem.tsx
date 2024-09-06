import type { NavItemProps } from "@/navigation/admin";
import cn from "classnames";
import Link from "next/link";

const NavHeader = ({ name }: NavItemProps) => {
  return <h2 className="text-[#A5ABB2] font-bold text-xs">{name}</h2>;
};

export default function NavItem({
  title,
  name,
  children,
  href,
  icon: Icon,
  isHeader,
  isActive,
}: NavItemProps & { isActive: boolean }) {
  if (isHeader) return <NavHeader name={name} />;

  return (
    <Link
      href={href !== undefined ? href : "#"}
      className={cn(
        "flex flex-row items-center h-[44px] rounded-full p-[10px_16px] group hover:bg-blue-300",
        {
          "bg-[#2B82FE]": isActive,
        }
      )}
    >
      {Icon && (
        <Icon
          className={cn("w-6 h-6 group-hover:stroke-white", {
            "stroke-white": isActive,
          })}
        />
      )}{" "}
      <span
        className={cn("ms-[14px] group-hover:text-white font-semibold", {
          "text-white": isActive,
        })}
      >
        {name}
      </span>
    </Link>
  );
}
