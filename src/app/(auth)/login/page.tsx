// ** Layout
import BlankLayout from "@/layouts/BlankLayout";

// ** Next
import Image from "next/image";

// ** Validation
import FormLogin from "./FormLogin";

export default function Login() {
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
      <main>
        <section id="auth-login">
          <FormLogin />
        </section>
      </main>
    </BlankLayout>
  );
}
