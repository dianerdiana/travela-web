export default function Discover() {
  return (
    <div className="w-full h-[130px] flex flex-col gap-[10px] rounded-[22px] items-center overflow-hidden relative">
      <img src="assets/backgrounds/Banner.png" className="w-full h-full object-cover object-center" alt="background" />
      <div className="absolute z-10 flex flex-col gap-[10px] transform -translate-y-1/2 top-1/2 left-4">
        <p className="text-white font-semibold">
          Discover the
          <br />
          Beauty of Japan
        </p>
        <a href="" className="bg-[#4D73FF] p-[8px_24px] rounded-[10px] text-white font-semibold text-xs w-fit">
          Discover
        </a>
      </div>
    </div>
  );
}
