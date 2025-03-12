import Image from "next/image";

export default function SignUp() {
  return (
    <section id="content" className="max-w-[640px] w-full mx-auto bg-trv-light-5 min-h-screen">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-[46px] px-4 gap-8">
        <div className="w-[calc(100%-26px)] rounded-[20px] overflow-hidden relative">
          <img
            src="assets/backgrounds/signup.png"
            className="w-full h-full object-contain"
            alt="background"
          />
        </div>
        <form
          action="home.html"
          className="flex flex-col w-full bg-white p-[24px_16px] gap-8 rounded-[22px] items-center"
        >
          <div className="flex flex-col gap-1 text-center">
            <h1 className="font-semibold text-2xl leading-[42px]">Sign Up</h1>
            <p className="text-sm leading-[25px] tracking-[0.6px] text-darkGrey">
              Enter valid data to create your account
            </p>
          </div>
          <div className="flex flex-col gap-[15px] w-full max-w-[311px]">
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">Avatar</p>
              <div className="flex items-center gap-3 p-[16px_12px] border border-trv-light-8 rounded-xl focus-within:border-trv-blue-9 transition-all duration-300 overflow-hidden">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/gallery-2.svg" alt="icon" />
                </div>
                <button type="button" id="upload-file" className="flex items-center gap-3">
                  <div
                    id="chosse-file-dummy-btn"
                    className="border border-trv-light-9 bg-trv-light-4 py-1 px-2 rounded-lg text-nowrap text-sm leading-[22px] tracking-035 h-fit"
                  >
                    Choose File
                  </div>
                  <div>
                    <p
                      id="placeholder"
                      className="text-nowrap text-trv-light-8 text-sm tracking-035 leading-[22px] text-left"
                    >
                      No file chosen
                    </p>
                    <div id="file-info" className="hidden flex-row flex-nowrap gap-3 items-center">
                      <span
                        id="fileName"
                        className="text-sm tracking-035 leading-[22px] text-nowrap"
                      ></span>
                    </div>
                  </div>
                  <input type="file" name="file" id="file" className="hidden" />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">Full Name</p>
              <div className="flex items-center gap-3 p-[16px_12px] border border-trv-light-8 rounded-xl focus-within:border-trv-blue-9 transition-all duration-300">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/user-flat-black.svg" alt="icon" />
                </div>
                <input
                  type="text"
                  className="appearance-none outline-none w-full text-sm placeholder:text-trv-light-8 tracking-[0.35px]"
                  placeholder="Write your full name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">Phone Number</p>
              <div className="flex items-center gap-3 p-[16px_12px] border border-trv-light-8 rounded-xl focus-within:border-trv-blue-9 transition-all duration-300">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/call.svg" alt="icon" />
                </div>
                <input
                  type="tel"
                  className="appearance-none outline-none w-full text-sm placeholder:text-trv-light-8 tracking-[0.35px]"
                  placeholder="Your valid phone number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">Email Address</p>
              <div className="flex items-center gap-3 p-[16px_12px] border border-trv-light-8 rounded-xl focus-within:border-trv-blue-9 transition-all duration-300">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/sms.svg" alt="icon" />
                </div>
                <input
                  type="email"
                  className="appearance-none outline-none w-full text-sm placeholder:text-trv-light-8 tracking-[0.35px]"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">Password</p>
              <div className="flex items-center gap-3 p-[16px_12px] border border-trv-light-8 rounded-xl focus-within:border-trv-blue-9 transition-all duration-300">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/password-lock.svg" alt="icon" />
                </div>
                <input
                  type="password"
                  id="password"
                  name=""
                  className="appearance-none outline-none w-full text-sm placeholder:text-trv-light-8 tracking-[0.35px]"
                  placeholder="Enter your valid password"
                />
                <button type="button" className="reveal-password w-4 h-4 flex shrink-0">
                  <img src="assets/icons/password-eye.svg" className="see-password" alt="icon" />
                  <img
                    src="assets/icons/password-eye-slash.svg"
                    className="hide-password hidden"
                    alt="icon"
                  />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">Confirm Password</p>
              <div className="flex items-center gap-3 p-[16px_12px] border border-trv-light-8 rounded-xl focus-within:border-trv-blue-9 transition-all duration-300">
                <div className="w-4 h-4 flex shrink-0">
                  <img src="assets/icons/password-lock.svg" alt="icon" />
                </div>
                <input
                  type="password"
                  id="confirm-password"
                  name=""
                  className="appearance-none outline-none w-full text-sm placeholder:text-trv-light-8 tracking-[0.35px]"
                  placeholder="Confirm your valid password"
                />
                <button type="button" className="reveal-password w-4 h-4 flex shrink-0">
                  <img src="assets/icons/password-eye.svg" className="see-password" alt="icon" />
                  <img
                    src="assets/icons/password-eye-slash.svg"
                    className="hide-password hidden"
                    alt="icon"
                  />
                </button>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-trv-blue-9 p-[16px_24px] w-full max-w-[311px] rounded-[10px] text-center text-white font-semibold hover:bg-trv-green-1 transition-all duration-300"
          >
            Sign up
          </button>
          <p className="text-center text-sm tracking-035 text-darkGrey">
            Already have an account? &nbsp;
            <a href="index.html" className="text-trv-blue-9 font-semibold tracking-[0.6px]">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
