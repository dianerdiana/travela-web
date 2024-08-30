import React from "react";

const BlankLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section
      id="content"
      className="max-w-[640px] w-full mx-auto min-h-screen flex flex-col gap-8"
    >
      {children}
    </section>
  );
};

export default BlankLayout;
