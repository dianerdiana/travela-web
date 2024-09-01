"use client";

// ** Next
import Link from "next/link";

// ** Thirdparty
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// ** Validation
import { loginSchema } from "@/lib/validations/login";
import InputIconLeft from "@/components/form/InputIconLeft";

export default function FormLogin() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card py-5 px-4 flex flex-col items-center gap-8"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold leading-[42px] mb-1">Sign In</h3>
        <p className="text-sm text-secondary-500 leading-[25px] tracking-[0.6px]">
          Welcome Back! Enter your valid data
        </p>
      </div>
      <div className="flex flex-col max-w-[311px] w-full gap-[15px]">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <InputIconLeft
                {...field}
                name={field.name}
                type="email"
                placeholder="Your email address"
                isInvalid={errors.email && true}
                describedBy="err-email"
                iconSrc="/assets/icons/sms.svg"
              />
            )}
          />
          <span id="err-email" className="text-red-500 text-sm">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <InputIconLeft
                {...field}
                name={field.name}
                type="password"
                placeholder="Enter your valid password"
                isInvalid={errors.password && true}
                describedBy="err-password"
                iconSrc="/assets/icons/sms.svg"
              />
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
  );
}
