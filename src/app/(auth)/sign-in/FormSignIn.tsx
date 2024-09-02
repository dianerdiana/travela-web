"use client";

// ** Next
import Link from "next/link";

// ** Thirdparty
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ** Validation
import { defaultValues, SignInFormData, signInSchema } from "@/lib/validations/sign-in";

export default function FormSignIn() {
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues,
  });

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card py-5 px-4 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold leading-[42px] mb-1">Sign In</h3>
        <p className="text-sm text-secondary-500 leading-[25px] tracking-[0.6px]">
          Welcome Back! Enter your valid data
        </p>
      </div>
      <div className="flex flex-col max-w-[311px] w-full gap-[15px]">
        <div className="form-input">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <div className={`input-wrapper ${errors.email ? "input-border-invalid" : "input-border"}`}>
                <div className="input-icon">
                  <img src="/assets/icons/sms.svg" alt="email-icon" />
                </div>
                <input
                  {...field}
                  id="email"
                  type="email"
                  className="input-appearance-none"
                  placeholder="Your email address"
                  aria-invalid={errors.email && true}
                  aria-describedby="err-email"
                />
              </div>
            )}
          />
          <span id="err-email" className="text-red-500 text-sm">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className="form-input">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <div className={`input-wrapper ${errors.password ? "input-border-invalid" : "input-border"}`}>
                <div className="input-icon">
                  <img src="/assets/icons/password-lock.svg" alt="password-icon" />
                </div>
                <input
                  {...field}
                  id="password"
                  type="password"
                  className="input-appearance-none"
                  placeholder="Enter your valid password"
                  aria-invalid={errors.password && true}
                  aria-describedby="err-password"
                />
              </div>
            )}
          />
          <span id="err-password" className="text-red-500 text-sm">
            {errors.password && errors.password.message}
          </span>
        </div>
      </div>
      <button className="bg-primary-500 w-full text-white font-semibold max-w-[311px] py-4 leading-6 rounded-[10px]">
        Sign In
      </button>

      <p>
        <span className="text-sm text-secondary-500 tracking-[0.35px]">Don’t have account?</span>{" "}
        <Link href="/sign-up" className="text-sm text-primary-500 font-semibold">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
