import React from "react";
import dynamic from "next/dynamic";

const AdminLayout = dynamic(() => import("@/layouts/AdminLayout"));

type LayoutProps = {
  children: React.ReactNode;
};

export default function Dashboard({ children }: LayoutProps) {
  return <AdminLayout>{children}</AdminLayout>;
}
