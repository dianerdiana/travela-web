import React from "react";

import AdminLayout from "@/layouts/AdminLayout";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Dashboard({ children }: LayoutProps) {
  return <AdminLayout>{children}</AdminLayout>;
}
