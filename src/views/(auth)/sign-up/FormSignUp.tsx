"use client";

// ** Next
import Link from "next/link";

// ** Thirdparty
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ** Validation
import { signUpSchema, SignUpFormData, defaultValues } from "@/lib/validations/sign-up";
import { useRef, useState } from "react";

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

  const avatarRef = useRef<HTMLInputElement>(null);
  const chooseFileRef = useRef<HTMLDivElement>(null);

  // ** State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatarFile, setAvatarFile] = useState("");

  const onSubmit = (data: SignUpFormData) => {
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    if (data.avatar && data.avatar.length > 0) {
      formData.append("avatar", data.avatar[0]);
    }
    console.log(data, formData);
  };

  const handleChangeAvatar = () => avatarRef.current?.click();
  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prevState) => !prevState);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card py-5 px-4 flex flex-col items-center gap-8"
    >
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold leading-[42px] mb-1">Sign Up</h3>
        <p className="text-sm text-secondary-500 leading-[25px] tracking-[0.6px]">
          Enter valid data to create your account
        </p>
      </div>
      <div className="flex flex-col max-w-[311px] w-full gap-[15px]">
        <div className="form-input">
          <label htmlFor="avatar" className="font-semibold">
            Avatar
          </label>
          <Controller
            control={control}
            name="avatar"
            render={({ field }) => (
              <div
                className={`input-wrapper ${
                  errors.avatar ? "input-border-invalid" : "input-border"
                }`}
              >
                <div className="input-icon">
                  <img src="assets/icons/gallery-2.svg" alt="icon" />
                </div>
                <button
                  type="button"
                  id="upload-file"
                  className="flex items-center gap-3"
                  onClick={handleChangeAvatar}
                >
                  <div
                    ref={chooseFileRef}
                    className="input-border bg-secondary-50 py-1 px-2 rounded-lg text-nowrap text-sm leading-[22px] tracking-035 h-fit"
                  >
                    Choose File
                  </div>
                  <div>
                    <p className="text-nowrap text-secondary-200 text-sm tracking-035 leading-[22px] text-left">
                      {avatarFile ? avatarFile : "No file choosen"}
                    </p>
                    <div id="file-info" className="flex flex-row flex-nowrap gap-3 items-center">
                      <span
                        id="fileName"
                        className="text-sm tracking-035 leading-[22px] text-nowrap"
                      ></span>
                    </div>
                  </div>
                  <input
                    ref={avatarRef}
                    id="avatar"
                    type="file"
                    name={field.name}
                    className="hidden"
                    accept="png|PNG|jpg|JPG|jpeg|JPEG"
                    onChange={(e) => {
                      const files = e.target.files;

                      if (files !== null && files.length > 0) {
                        chooseFileRef.current?.classList.add("hidden");

                        const fileName = files[0].name;
                        setAvatarFile(String(fileName));
                        field.onChange(files);
                      }
                    }}
                  />
                </button>
              </div>
            )}
          />
          <span id="err-avatar" className="text-red-500 text-sm">
            {errors.avatar && errors.avatar.message}
          </span>
        </div>
        <div className="form-input">
          <label htmlFor="fullName" className="font-semibold">
            Full Name
          </label>
          <Controller
            control={control}
            name="fullName"
            render={({ field }) => (
              <div
                className={`input-wrapper ${
                  errors.fullName ? "input-border-invalid" : "input-border"
                }`}
              >
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
              <div
                className={`input-wrapper ${
                  errors.phoneNumber ? "input-border-invalid" : "input-border"
                }`}
              >
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
              <div
                className={`input-wrapper ${
                  errors.email ? "input-border-invalid" : "input-border"
                }`}
              >
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
              <div
                className={`input-wrapper ${
                  errors.password ? "input-border-invalid" : "input-border"
                }`}
              >
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
                    src={
                      showPassword
                        ? "/assets/icons/password-eye.svg"
                        : "/assets/icons/password-eye-slash.svg"
                    }
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
              <div
                className={`input-wrapper ${
                  errors.confirmPassword ? "input-border-invalid" : "input-border"
                }`}
              >
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
                      showConfirmPassword
                        ? "/assets/icons/password-eye.svg"
                        : "/assets/icons/password-eye-slash.svg"
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
