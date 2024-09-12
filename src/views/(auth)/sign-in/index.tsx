// ** Next
import Image from "next/image";

// ** Validation
import FormSignIn from "./FormSignIn";

export default function SignInWrapper() {
  return (
    <>
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
          <FormSignIn />
        </section>
      </main>
    </>
  );
}
