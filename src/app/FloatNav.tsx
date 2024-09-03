export default function FloatNav() {
  return (
    <div className="navigation-bar fixed bottom-0 z-50 max-w-[640px] w-full h-[85px] bg-white rounded-t-[25px] flex items-center justify-evenly py-[45px]">
      <a href="" className="menu">
        <div className="flex flex-col justify-center w-fit gap-1">
          <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-[#4D73FF]">
            <img src="assets/icons/home.svg" alt="icon" />
          </div>
          <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Home</p>
        </div>
      </a>
      <a href="" className="menu opacity-25">
        <div className="flex flex-col justify-center w-fit gap-1">
          <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-[#4D73FF]">
            <img src="assets/icons/search.svg" alt="icon" />
          </div>
          <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Search</p>
        </div>
      </a>
      <a href="schedule.html" className="menu opacity-25">
        <div className="flex flex-col justify-center w-fit gap-1">
          <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-[#4D73FF]">
            <img src="assets/icons/calendar-blue.svg" alt="icon" />
          </div>
          <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Schedule</p>
        </div>
      </a>
      <a href="" className="menu opacity-25">
        <div className="flex flex-col justify-center w-fit gap-1">
          <div className="w-4 h-4 flex shrink-0 overflow-hidden mx-auto text-[#4D73FF]">
            <img src="assets/icons/user-flat.svg" alt="icon" />
          </div>
          <p className="font-semibold text-xs leading-[20px] tracking-[0.35px]">Profile</p>
        </div>
      </a>
    </div>
  );
}
