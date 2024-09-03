"use client";

// Next
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode } from "swiper/modules";

export default function TripRecommendations() {
  return (
    <Swiper slidesPerView={2} freeMode={true} modules={[FreeMode]} className="w-full" wrapperClass="gap-4">
      <SwiperSlide className="max-w-[288px]">
        <Link href="details" className="group">
          <div className="w-full p-4 flex flex-col gap-3 rounded-[26px] bg-white shadow-[6px_8px_20px_0_#00000008]">
            <div className="w-full h-[330px] rounded-xl flex shrink-0 overflow-hidden">
              <img src="assets/thumbnails/nusa-penida.jpg" className="w-full h-full object-cover" alt="thumbnails" />
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1">
                <p className="font-semibold two-lines">Nusa Penida Kelingking Beach</p>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 flex shrink-0">
                    <img src="assets/icons/location-map.svg" alt="icon" />
                  </div>
                  <span className="text-sm text-darkGrey tracking-035">Bali, Indonesia</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p className="text-sm leading-[21px]">
                  <span className="font-semibold text-[#4D73FF] text-nowrap">Rp 900.000</span>
                  <br />
                  <span className="text-darkGrey">/3days</span>
                </p>
                <div className="flex items-center gap-1 justify-end">
                  <div className="w-4 h-4 flex shrink-0">
                    <img src="assets/icons/Star.svg" alt="icon" />
                  </div>
                  <span className="font-semibold text-sm leading-[21px]">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="max-w-[288px]">
        <Link href="details" className="group">
          <div className="w-full p-4 flex flex-col gap-3 rounded-[26px] bg-white shadow-[6px_8px_20px_0_#00000008]">
            <div className="w-full h-[330px] rounded-xl flex shrink-0 overflow-hidden">
              <img src="assets/thumbnails/raja.jpg" className="w-full h-full object-cover" alt="thumbnails" />
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1">
                <p className="font-semibold two-lines">Raja Ampat Salawati Island</p>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 flex shrink-0">
                    <img src="assets/icons/location-map.svg" alt="icon" />
                  </div>
                  <span className="text-sm text-darkGrey tracking-035">Papua, Indonesia</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p className="text-sm leading-[21px]">
                  <span className="font-semibold text-[#4D73FF] text-nowrap">Rp 900.000</span>
                  <br />
                  <span className="text-darkGrey">/3days</span>
                </p>
                <div className="flex items-center gap-1 justify-end">
                  <div className="w-4 h-4 flex shrink-0">
                    <img src="assets/icons/Star.svg" alt="icon" />
                  </div>
                  <span className="font-semibold text-sm leading-[21px]">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide className="max-w-[288px]">
        <Link href="details" className="group">
          <div className="w-full p-4 flex flex-col gap-3 rounded-[26px] bg-white shadow-[6px_8px_20px_0_#00000008]">
            <div className="w-full h-[330px] rounded-xl flex shrink-0 overflow-hidden">
              <img src="assets/thumbnails/maldives.jpg" className="w-full h-full object-cover" alt="thumbnails" />
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1">
                <p className="font-semibold two-lines">Maldives Exotic Island</p>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 flex shrink-0">
                    <img src="assets/icons/location-map.svg" alt="icon" />
                  </div>
                  <span className="text-sm text-darkGrey tracking-035">Bali, Indonesia</span>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <p className="text-sm leading-[21px]">
                  <span className="font-semibold text-[#4D73FF] text-nowrap">Rp 900.000</span>
                  <br />
                  <span className="text-darkGrey">/3days</span>
                </p>
                <div className="flex items-center gap-1 justify-end">
                  <div className="w-4 h-4 flex shrink-0">
                    <img src="assets/icons/Star.svg" alt="icon" />
                  </div>
                  <span className="font-semibold text-sm leading-[21px]">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}
