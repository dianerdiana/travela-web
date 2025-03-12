export default function SignIn() {
  return (
    <section id="content" className="max-w-[640px] w-full mx-auto bg-trv-light-5 min-h-screen">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-[46px] px-4 gap-8">
        <div className="w-[calc(100%-26px)] rounded-[20px] overflow-hidden relative">
          <img
            src="assets/backgrounds/signin.png"
            className="w-full h-full object-contain"
            alt="background"
          />
        </div>
        <form
          action="home.html"
          className="flex flex-col w-full bg-white p-[24px_16px] gap-8 rounded-[22px] items-center"
        >
          <div className="flex flex-col gap-1 text-center">
            <h1 className="font-semibold text-2xl leading-[42px]">Sign In</h1>
            <p className="text-sm leading-[25px] tracking-[0.6px] text-darkGrey">
              Welcome Back! Enter your valid data
            </p>
          </div>
          <div className="flex flex-col gap-[15px] w-full max-w-[311px]">
            <div className="flex flex-col gap-1 w-full">
              <p className="font-semibold">Email</p>
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
                  className="appearance-none outline-none w-full text-sm placeholder:text-trv-light-8 tracking-[0.35px]"
                  placeholder="Enter your valid password"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-trv-blue-9 p-[16px_24px] w-full max-w-[311px] rounded-[10px] text-center text-white font-semibold hover:bg-trv-green-1 transition-all duration-300"
          >
            Sign In
          </button>
          <p className="text-center text-sm tracking-035 text-darkGrey">
            Don’t have account? &nbsp;
            <a href="signup.html" className="text-trv-blue-9 font-semibold tracking-[0.6px]">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
