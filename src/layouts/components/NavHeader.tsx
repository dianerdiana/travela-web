import type { NavItem } from "@/navigation/admin"

export default function NavHeader({navItem}: NavItem) {
  return (
    <>
      {navItem.isHeader? ()}
    </>
  )
}