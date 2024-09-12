// ** Next
import Image from "next/image";

// ** Validation
import FormSignUp from "./FormSignUp";

export default function SignUpWrapper() {
  return (
    <>
      <header className="pt-11 px-4 flex justify-center">
        <Image
          src="/assets/backgrounds/sign-up.png"
          alt="Sign-Up-Illustration"
          width={560}
          height={417}
          className="w-full h-auto"
          priority
        />
      </header>
      <main>
        <section id="auth-register">
          <FormSignUp />
        </section>
      </main>
    </>
  );
}
