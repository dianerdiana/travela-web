// ** Next
import Link from "next/link";

export default function SignIn() {
  return (
    <section id="auth-login">
      <form className="card py-5 px-4 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold leading-[42px] mb-1">
            Sign In
          </h3>
          <p className="text-sm text-secondary-500 leading-[25px] tracking-[0.6px]">
            Welcome Back! Enter your valid data
          </p>
        </div>
        <div className="flex flex-col max-w-[311px] w-full gap-[15px]">
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <div className="flex items-center gap-3 p-[16px_12px] border border-secondary-200 rounded-xl focus-within:border-primary-400 transition-all duration-300">
              <div className="w-4 h-4 flex shrink-0">
                <img src="/assets/icons/sms.svg" alt="email-icon" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                className="appearance-none outline-none w-full text-sm placeholder:text-secondary-200 border-secondary-200 tracking-[0.35px]"
                placeholder="Your email address"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <div className="flex items-center gap-3 p-[16px_12px] border border-secondary-200 rounded-xl focus-within:border-primary-400 transition-all duration-300">
              <div className="w-4 h-4 flex shrink-0">
                <img src="/assets/icons/lock.svg" alt="password-icon" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                className="appearance-none outline-none w-full text-sm placeholder:text-secondary-200 tracking-[0.35px]"
                placeholder="Enter your valid password"
              />
            </div>
          </div>
        </div>
        <button className="bg-primary-500 w-full text-white font-semibold max-w-[311px] py-4 leading-6 rounded-[10px]">
          Sign In
        </button>

        <p>
          <span className="text-sm text-secondary-500 tracking-[0.35px]">
            Don’t have account?
          </span>{" "}
          <Link
            href="/auth/sign-up"
            className="text-sm text-primary-500 font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
}
