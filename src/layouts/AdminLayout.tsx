import React from "react";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section
      id="content"
      className="max-w-80 w-full mx-auto min-h-screen flex flex-col gap-8"
    >
      {children}
    </section>
  );
};

export default AdminLayout;
