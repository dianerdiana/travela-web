"use client";

// ** Next
import Link from "next/link";

// ** Thirdparty
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ** Validation
import { signUpSchema, SignUpFormData, defaultValues } from "@/lib/validations/sign-up";
import { useState } from "react";

export default function FormSignUp() {
  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    defaultValues,
    mode: "onSubmit",
  });

  // ** State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prevState) => !prevState);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card py-5 px-4 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold leading-[42px] mb-1">Sign Up</h3>
        <p className="text-sm text-secondary-500 leading-[25px] tracking-[0.6px]">
          Enter valid data to create your account
        </p>
      </div>
      <div className="flex flex-col max-w-[311px] w-full gap-[15px]">
        <div className="form-input">
          <label htmlFor="fullName" className="font-semibold">
            Full Name
          </label>
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => (
              <div className={`input-wrapper ${errors.fullName ? "input-border-invalid" : "input-border"}`}>
                <div className="input-icon">
                  <img src="/assets/icons/user.svg" alt="fullName-icon" />
                </div>
                <input
                  {...field}
                  id="fullName"
                  type="text"
                  className="input-appearance-none"
                  placeholder="Write your full name"
                  aria-invalid={errors.fullName && true}
                  aria-describedby="err-fullName"
                />
              </div>
            )}
          />
          <span id="err-fullName" className="text-red-500 text-sm">
            {errors.fullName && errors.fullName.message}
          </span>
        </div>
        <div className="form-input">
          <label htmlFor="phoneNumber" className="font-semibold">
            Phone Number
          </label>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field }) => (
              <div className={`input-wrapper ${errors.phoneNumber ? "input-border-invalid" : "input-border"}`}>
                <div className="input-icon">
                  <img src="/assets/icons/telephone.svg" alt="phoneNumber-icon" />
                </div>
                <input
                  {...field}
                  id="phoneNumber"
                  type="text"
                  className="input-appearance-none"
                  placeholder="Write your full name"
                  aria-invalid={errors.phoneNumber && true}
                  aria-describedby="err-phoneNumber"
                />
              </div>
            )}
          />
          <span id="err-phoneNumber" className="text-red-500 text-sm">
            {errors.phoneNumber && errors.phoneNumber.message}
          </span>
        </div>
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
                  type={showPassword ? "text" : "password"}
                  className="input-appearance-none"
                  placeholder="Enter your valid password"
                  aria-invalid={errors.password && true}
                  aria-describedby="err-password"
                />
                <div className="input-icon cursor-pointer" onClick={toggleShowPassword}>
                  <img
                    src={showPassword ? "/assets/icons/password-eye.svg" : "/assets/icons/password-eye-slash.svg"}
                    alt="password-icon"
                  />
                </div>
              </div>
            )}
          />
          <span id="err-password" className="text-red-500 text-sm">
            {errors.password && errors.password.message}
          </span>
        </div>
        <div className="form-input">
          <label htmlFor="confirmPassword" className="font-semibold">
            Confirm Password
          </label>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => (
              <div className={`input-wrapper ${errors.confirmPassword ? "input-border-invalid" : "input-border"}`}>
                <div className="input-icon">
                  <img src="/assets/icons/password-lock.svg" alt="password-icon" />
                </div>
                <input
                  {...field}
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className="input-appearance-none"
                  placeholder="Confirm your valid password"
                  aria-invalid={errors.confirmPassword && true}
                  aria-describedby="err-confirmPassword"
                />
                <div className="input-icon cursor-pointer" onClick={toggleShowConfirmPassword}>
                  <img
                    src={
                      showConfirmPassword ? "/assets/icons/password-eye.svg" : "/assets/icons/password-eye-slash.svg"
                    }
                    alt="password-icon"
                  />
                </div>
              </div>
            )}
          />
          <span id="err-confirmPassword" className="text-red-500 text-sm">
            {errors.confirmPassword && errors.confirmPassword.message}
          </span>
        </div>
      </div>
      <button className="bg-primary-500 w-full text-white font-semibold max-w-[311px] py-4 leading-6 rounded-[10px]">
        Sign Up
      </button>

      <p>
        <span className="text-sm text-secondary-500 tracking-[0.35px]">Already have account?</span>{" "}
        <Link href="/sign-in" className="text-sm text-primary-500 font-semibold">
          Sign In
        </Link>
      </p>
    </form>
  );
}
