import React from "react";

// ** Layout
import BlankLayout from "@/layouts/BlankLayout";

// ** Next
import Image from "next/image";

const SignInLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <BlankLayout paddingBottom="46px">
      <header className="pt-11 px-4 flex justify-center">
        <Image
          src="/assets/backgrounds/sign-in.png"
          alt="Sign-In-Illustration"
          width={560}
          height={417}
          className="w-full h-auto"
          priority
        />
      </header>
      <main>{children}</main>
    </BlankLayout>
  );
};

export default SignInLayout;
