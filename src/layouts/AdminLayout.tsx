"use client";

import React from "react";
import Sidebar from "./components/Sidebar";
import navigation from "@/navigation/admin";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className="flex flex-row">
      <Sidebar navMenu={navigation} />
      <div>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </section>
  );
};

export default AdminLayout;
