"use client";

// ** Thirdparty
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

export default function Categories() {
  return (
    <Swiper
      slidesPerView={4}
      freeMode={true}
      modules={[FreeMode]}
      className="w-full max-w-screen"
      wrapperClass="gap-4"
    >
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="block group">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="flex w-6 h-6 shrink-0">
              <img src="assets/icons/umbrella.svg" alt="icon" />
            </div>
            <span className="text-sm tracking-[0.35px] text-primary-500 group-hover:text-white transition-all duration-300">
              Beach
            </span>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="block group">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="flex w-6 h-6 shrink-0">
              <img src="assets/icons/mountain.svg" alt="icon" />
            </div>
            <span className="text-sm tracking-[0.35px] text-primary-500 group-hover:text-white transition-all duration-300">
              Mountain
            </span>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="block group">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="flex w-6 h-6 shrink-0">
              <img src="assets/icons/tent.svg" alt="icon" />
            </div>
            <span className="text-sm tracking-[0.35px] text-primary-500 group-hover:text-white transition-all duration-300">
              Nature
            </span>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="block group">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="flex w-6 h-6 shrink-0">
              <img src="assets/icons/historical.svg" alt="icon" />
            </div>
            <span className="text-sm tracking-[0.35px] text-primary-500 group-hover:text-white transition-all duration-300">
              Historical
            </span>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  );
}

export const CategoriesLoading = () => {
  return (
    <div className="w-full max-w-screen animate-pulse">
      <div className="flex gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="max-w-fit">
            <div className="p-3 flex items-center gap-2 rounded-[10px] border border-gray-300">
              <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
              <span className="w-20 h-4 bg-gray-300 rounded-md"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
