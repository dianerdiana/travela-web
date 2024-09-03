"use client";

// ** Thirdparty
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// ** Swiper Styles
import "swiper/css";
import "swiper/css/free-mode";

export default function Categories() {
  return (
    <Swiper slidesPerView={4} spaceBetween={16} freeMode={true} modules={[FreeMode]} className="w-full max-w-screen">
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="group block">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="w-6 h-6 flex shrink-0">
              <img src="assets/icons/umbrella.svg" alt="icon" />
            </div>
            <span className="text-sm tracking-[0.35px] text-primary-500 group-hover:text-white transition-all duration-300">
              Beach
            </span>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="group block">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="w-6 h-6 flex shrink-0">
              <img src="assets/icons/mountain.svg" alt="icon" />
            </div>
            <span className="text-sm tracking-[0.35px] text-primary-500 group-hover:text-white transition-all duration-300">
              Mountain
            </span>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="group block">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="w-6 h-6 flex shrink-0">
              <img src="assets/icons/tent.svg" alt="icon" />
            </div>
            <span className="text-sm tracking-[0.35px] text-primary-500 group-hover:text-white transition-all duration-300">
              Nature
            </span>
          </div>
        </a>
      </SwiperSlide>
      <SwiperSlide className="max-w-fit">
        <a href="category.html" className="group block">
          <div className="p-3 flex items-center gap-2 rounded-[10px] border border-primary-500 group-hover:bg-primary-500 transition-all duration-300">
            <div className="w-6 h-6 flex shrink-0">
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
