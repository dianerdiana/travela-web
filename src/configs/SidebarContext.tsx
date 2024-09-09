"use client";

import React, { createContext, useState } from "react";

export const SidebarContext = createContext({});

export default function SidebarContextProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
