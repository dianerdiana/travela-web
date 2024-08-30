import React from "react";

const BlankLayout: React.FC<{
  children: React.ReactNode;
  paddingBottom?: string;
}> = ({ children, paddingBottom = "120px" }) => {
  return (
    <div
      id="layout"
      className={`container-app flex flex-col gap-8 bg-vista-500`}
      style={{ paddingBottom }}
    >
      {children}
    </div>
  );
};

export default BlankLayout;
